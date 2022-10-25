import { Injectable } from '@angular/core';
import { Client, Account, ID } from 'appwrite';


@Injectable({
    providedIn: 'root',
})
export class AppwriteService {
    client?: Client;
    setupSDK(): void {
        this.client = new Client()
            .setEndpoint('https://localhost/v1') // Your API Endpoint
            .setProject('6357bd837483b700359d');               // Your project ID
    }
    
}