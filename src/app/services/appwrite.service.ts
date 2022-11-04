import { Injectable } from '@angular/core';
import { Client, Account, ID, Functions } from 'appwrite';


@Injectable({
    providedIn: 'root',
})
export class AppwriteService {
    client: Client = new Client();
    functions: Functions = new Functions(this.client);

    TRANSCRIPT_FUNCTION_ID = "transcriptYoutube";
    APPWRITE_PROJECT_ID = "transcriptions";
    APPWRITE_ENDPOINT = "[YOUR_APPWRITE_ENDPOINT]";

    setupSDK(): void {
        this.client
            .setEndpoint(this.APPWRITE_ENDPOINT) // Your API Endpoint
            .setProject(this.APPWRITE_PROJECT_ID);               // Your project ID
    }

    transcriptFunction(url: string): any {
        //this.setupSDK();
        const req = { videoUrl: url }
        const promise = this.functions.createExecution(this.TRANSCRIPT_FUNCTION_ID,JSON.stringify(req));

        return promise;
    }

}