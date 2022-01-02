
// const { auth } = require("google-auth-library");
// const {google} = require("googleapis")
import { google } from "googleapis";
import {cred} from '../../credentials.json'
export default async function form1(req, res){

    if (req.method === 'POST') {
        // Process a POST request
        console.log("POST hit")
        const auth = new google.auth.GoogleAuth({
            keyFile: "credentials.json",
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        })

        //create client instancce
    const client = await auth.getClient();

    //instance of google sheet api

    const googleSheets = google.sheets({version: "v4", auth: client});


    const spreadsheetId = "1ZgPvbpJhFT2kpGvIb1q3DeTPNzL848TYpMGlV5H4_4Q"

    // //get metadata
    // const metaData = await googleSheets.spreadsheets.get({
    //     auth,
    //     spreadsheetId,
    // })

    // //Read rows FROM sheet

    // const getRows = await googleSheets.spreadsheets.values.get({
    //     auth,
    //     spreadsheetId,
    //     range: "Subs!A:B"
    // })

    //Write rows TO sheet
    const {name, email, phone} = req.body;

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range:"Subs!A:B",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [name, email, phone]
            ],
        }
    })

    res.send("Success")
      } else {
        // Handle any other HTTP method
        res.status(405)
      }


}
