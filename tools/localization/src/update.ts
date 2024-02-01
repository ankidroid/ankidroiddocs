/**
 * @author
 * AnkiDroid Open Source Team
 *
 * @license
 * Copyright (c) AnkiDroid. All rights reserved.
 * Licensed under the GPL-3.0 license. See LICENSE file in the project root for details.
 *
 * @description
 * updateI18nFiles() to update files in AnkiDroid/src/main/res/values/ with downloaded files from crowdin.
 * The downloaded file needs to extract first with 'yarn start extract'.
 * It's expected to be called through 'yarn start update'.
 */

import fs from "fs";
import {
    LANGUAGES,
    TEMP_DIR,
    poDirectory,
} from "./constants";

let anyError = false;

/**
 * Create language resource directory in res/value dir
 *
 * @param directory name of the directory
 */
export function createDirIfNotExisting(directory: string) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }
}

/**
 * For existing po files in po dir for each languages
 *
 * @param poDirectory po directory
 * @param translatedContent content of target language po file
 * @param language language code
 * @returns boolean
 */
async function update(
    poDirectory: string,
    translatedContent: string,
    language: string,
): Promise<boolean> {

    fs.writeFileSync(
        poDirectory + "/" + language + ".po",
        translatedContent,
    );

    return true;
}

/**
 * Update translated I18n files in po/ dir
 */
export async function updateI18nFiles() {

    for (const language of LANGUAGES) {

        console.log(`\nCopying language files from temp_dir/${language}/messages-${language}.po to po/${language}.po`);

        const file = `messages-${language}.po`;

        const translatedContent = fs.readFileSync(
            `${TEMP_DIR}/${language}/${file}`,
            "utf-8",
        );

        anyError = !(await update(
            poDirectory,
            translatedContent,
            language,
        ));

        if (anyError) {
            console.error(
                "At least one file of the last handled language contains an error.",
            );
            anyError = true;
        }
    }
}
