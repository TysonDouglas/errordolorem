/* eslint-disable */
/**
 * This file was automatically generated by scripts/manifest/migrate-ts.mustache.
 * DO NOT MODIFY IT BY HAND. Instead, modify scripts/manifest/migrate-ts.mustache,
 * and run node ./scripts/manifest/generateFormatTypes.js to regenerate this file.
 */
import {
  AnyPluginManifest,
  PluginManifest,
  PluginManifestFormats,
  latestPluginManifestFormat
} from ".";


import { Tracer } from "@web3api/tracing-js";

type Migrator = {
  [key in PluginManifestFormats]?: (m: AnyPluginManifest) => PluginManifest;
};

export const migrators: Migrator = {
};

export const migratePluginManifest = Tracer.traceFunc(
  "core: migratePluginManifest",
  (manifest: AnyPluginManifest, to: PluginManifestFormats): PluginManifest => {
    const from = manifest.format as PluginManifestFormats;

    if (from === latestPluginManifestFormat) {
      return manifest as PluginManifest;
    }

    if (!(from in PluginManifestFormats)) {
      throw new Error(`Unrecognized PluginManifestFormat "${manifest.format}"`);
    }

    throw new Error(`This should never happen, PluginManifest migrators is empty. from: ${from}, to: ${to}`);
  }
);
