from appwrite.client import Client
from pytube import YouTube
from io import BytesIO
from appwrite.input_file import InputFile

# You can remove imports of services you don't use
from appwrite.services.account import Account
from appwrite.services.avatars import Avatars
from appwrite.services.databases import Databases
from appwrite.services.functions import Functions
from appwrite.services.health import Health
from appwrite.services.locale import Locale
from appwrite.services.storage import Storage
from appwrite.services.teams import Teams
from appwrite.services.users import Users

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
  client = Client()

  # You can remove services you don't use
  account = Account(client)
  avatars = Avatars(client)
  database = Databases(client)
  functions = Functions(client)
  health = Health(client)
  locale = Locale(client)
  storage = Storage(client)
  teams = Teams(client)
  users = Users(client)

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
  
  payload = req.payload
  

  

  #check su variabile DEEPGRAM_SECRET_KEY
  dgsk = ''
  if not req.variables.get('DEEPGRAM_SECRET_KEY') :
    print('Deepgram secret key variable are not set. ')
  else:
    dgsk = req.variables.get('DEEPGRAM_SECRET_KEY')

  salvaFileAudio(storage,payload)
  return res.json({
    "areDevelopersAwesome": True,
    "payload" : payload,
    "bucketList:":storage.list_buckets()
  })  


def salvaFileAudio(storage,video_link=None):
  try:
    buffer = BytesIO()
    video = YouTube(video_link)
    # filtering the audio. File extension can be mp4/webm
    # You can see all the available streams by print(video.streams)
    print('Step1!')
    audio = video.streams.filter(only_audio=True, file_extension='mp4').first()
    print('Step2!')
    audio.stream_to_buffer(buffer)
    buffer.seek(0)
    #testRead = buffer.read()
    #print(testRead)
    print('Step3!')
    
    #pathAudio=audio.download(None,"audio.mp4")
    #print(pathAudio)
    #print(InputFile.from_bytes(buffer.read()))
    
    storage.create_file("6357c15e76b7c1073831","unique()", InputFile.from_bytes(buffer.getvalue(),"audio.mp4",'audio/mp4'))
    print('Download Completed!')

  except Exception as e:
    print("Connection Error")  # to handle exception
    print(e)
