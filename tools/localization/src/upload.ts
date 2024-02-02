/**
 * @author
 * AnkiDroid Open Source Team
 *
 * @license
 * Copyright (c) AnkiDroid. All rights reserved.
 * Licensed under the GPL-3.0 license. See LICENSE file in the project root for details.
 *
 * @description
 * uploadI18nFiles() to upload current version of English strings from po/messages.pot to crowdin.
 * It's expected to be called through yarn start upload
 */

import fs from "fs";
import crowdin, { ResponseList, SourceFilesModel } from "@crowdin/crowdin-api-client";
import {
    PROJECT_ID,
    credentialsConst,
    messagesPotFile,
} from "./constants";

// initialization of crowdin client
const { uploadStorageApi, sourceFilesApi } = new crowdin(credentialsConst);

/**
 * Upload English source files to Crowdin
 */
export async function uploadI18nFiles() {
    const files = await sourceFilesApi.listProjectFiles(PROJECT_ID);

    try {
        // upload messages.pot file
        const messagesPot = fs.readFileSync(messagesPotFile, "utf8");
        const messagesPotId = idOfFileOrNull("messages.pot", files);
        if (messagesPotId) {
            console.log("Updating messages.pot");
            await updateFile(messagesPotId, "messages.pot", messagesPot);
        } else {
            console.log("Creating messages.pot");
            await createFile("messages.pot", messagesPot);
        }
    } catch (error) {
        console.error(error);
    }
}

/**
 * Allow to upload a new file for the first time on crowdin
 *
 * @param fileName name of the file
 * @param fileContent file conten
 */
async function createFile(fileName: string, fileContent: string) {
    const storage = await uploadStorageApi.addStorage(fileName, fileContent);
    const file = await sourceFilesApi.createFile(PROJECT_ID, {
        name: fileName,
        title: fileName,
        storageId: storage.data.id,
        type: "auto",
    });
    console.log(file, storage.data.id);
}

/**
 * Update file with txt, xml content to translate
 *
 * @param id storage id (on Crowdin) for the file
 * @param fileName name of the file
 * @param fileContent file contents
 */
async function updateFile(id: number, fileName: string, fileContent: string) {
    const storage = await uploadStorageApi.addStorage(fileName, fileContent);
    const file = await sourceFilesApi.updateOrRestoreFile(PROJECT_ID, id, {
        storageId: storage.data.id,
    });
    console.log(file, storage.data.id);
}

/**
 * check if file exists on crowdin, if exist then return id
 *
 * @param fileName name of the file
 * @param files list of files for current project on Crowdin with ids, names ...
 * @returns id if filename stored on Crowdin else null
 */
function idOfFileOrNull(fileName: string, files: ResponseList<SourceFilesModel.File>) {
    for (const file of files.data) {
        if (file.data.name === fileName) {
            return file.data.id;
        }
    }
    return null;
}
