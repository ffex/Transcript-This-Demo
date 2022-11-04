from appwrite.client import Client
from pytube import YouTube
from io import BytesIO
from appwrite.input_file import InputFile
from deepgram import Deepgram
import json
import asyncio

"""
  'req' variable has:
    'headers' - object with request headers
    'payload' - request body data as a string
    'variables' - object with function variables

  'res' variable has:
    'send(text, status)' - function to return text response. Status code defaults to 200
    'json(obj, status)' - function to return JSON response. Status code defaults to 200

  If an error is thrown, a response with code 500 will be returned.
"""

def main(req, res):
  response="nothing"
  client = Client()
  
  if not req.variables.get('APPWRITE_FUNCTION_ENDPOINT') or not req.variables.get('APPWRITE_FUNCTION_API_KEY'):
    print('Environment variables are not set. Function cannot use Appwrite SDK.')
  else:
    (
    client
      .set_endpoint(req.variables.get('APPWRITE_FUNCTION_ENDPOINT', None))
      .set_project(req.variables.get('APPWRITE_FUNCTION_PROJECT_ID', None))
      .set_key(req.variables.get('APPWRITE_FUNCTION_API_KEY', None))
      .set_self_signed(True)
    )
  
  payload = json.loads(req.payload)
  
  dgsk = ''
  if not req.variables.get('DEEPGRAM_SECRET_KEY') :
    print('Deepgram secret key variable are not set. ')
  else:
    dgsk = req.variables.get('DEEPGRAM_SECRET_KEY')

  mime_type='audio/mp4'

  bytesAudio = getAudioFile(payload["videoUrl"],mime_type)

  #Request to deepgram
  try:
    source = {
      'buffer': bytesAudio,
      'mimetype': mime_type,
    }
    
    response= asyncio.run(callDeepgram(dgsk,source))
  except Exception as e:
    print("Unable to transcript")
    print(e)

  return res.json({
    "result": "OK",
    "deepgramResponse":response,
  })

async def callDeepgram(dgsk,source):
  deepgram = Deepgram(dgsk)
  response = await asyncio.create_task(
    deepgram.transcription.prerecorded(
      source,
      {
        'punctuate': True
      }
    )
  )
  return response

def getAudioFile(video_link, mime_type):
  try:
    buffer = BytesIO()
    video = YouTube(video_link)

    audio = video.streams.filter(only_audio=True, file_extension='mp4').first()
    
    audio.stream_to_buffer(buffer)
    buffer.seek(0)
    
    return buffer.getvalue()

  except Exception as e:
    print("Unable to get the audio file")  # to handle exception
    print(e)
