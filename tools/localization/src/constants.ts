/**
 * @author
 * AnkiDroid Open Source Team
 *
 * @license
 * Copyright (c) AnkiDroid. All rights reserved.
 * Licensed under the GPL-3.0 license. See LICENSE file in the project root for details.
 */

import path from "path";
import { Credentials } from "@crowdin/crowdin-api-client";
import { createDirIfNotExisting } from "./update";

import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });

const CROWDIN_APIv2_PAT = process.env.CROWDIN_APIv2_PAT ?? "";

// credentials
export const credentialsConst: Credentials = {
    token: CROWDIN_APIv2_PAT,
};

export const PROJECT_ID = 645072;
export const TITLE_STR = "AnkiDroid Manual";
export const poDirectory = path.join(__dirname, "../../../po");
export const messagesPotFile = path.join(poDirectory, "messages.pot");

export const TEMP_DIR = path.join(__dirname, "../temp_dir");
createDirIfNotExisting(TEMP_DIR);

export const LANGUAGES = [
    "ar",
    "ja",
    "zh-CN",
];
