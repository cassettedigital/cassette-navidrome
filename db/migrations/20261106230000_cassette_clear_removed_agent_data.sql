-- +goose Up

-- Cassette fork, Patch 009. This build carries no code for the two metadata
-- services that upstream bundles and that Cassette has no licence to use. This
-- migration clears what they may have left in an existing database, so nothing
-- that came from them is stored or served again.
--
-- The rules are written without naming either service, on purpose: the release
-- check is that their names appear nowhere in the shipped binary, and this file
-- is embedded in it. In this build each rule selects exactly their leftovers.

-- 1. Cached outside information on artists and albums: pictures, links,
--    biographies, similar-artist lists and album notes. Nothing in these columns
--    comes from a person's own files (Cassette's artist pictures live as artist.*
--    files in the music folders, which this does not touch). One of the removed
--    services wrote plain-text biographies and similar-artist lists that cannot
--    be told apart from any other source, so the cache is reset as a whole rather
--    than filtered by address. '[]' is what Navidrome itself writes for "no
--    similar artists". A NULL external_info_updated_at means "never looked
--    up", so whatever lookups this build still has can fill it again.
UPDATE artist
SET small_image_url          = '',
    medium_image_url         = '',
    large_image_url          = '',
    external_url             = '',
    biography                = '',
    similar_artists          = '[]',
    external_info_updated_at = NULL
WHERE small_image_url <> ''
   OR medium_image_url <> ''
   OR large_image_url <> ''
   OR external_url <> ''
   OR biography <> ''
   OR similar_artists NOT IN ('', '[]')
   OR external_info_updated_at IS NOT NULL;

UPDATE album
SET small_image_url          = '',
    medium_image_url         = '',
    large_image_url          = '',
    external_url             = '',
    description              = '',
    external_info_updated_at = NULL
WHERE small_image_url <> ''
   OR medium_image_url <> ''
   OR large_image_url <> ''
   OR external_url <> ''
   OR description <> ''
   OR external_info_updated_at IS NOT NULL;

-- 2. Stored sign-in keys for outside scrobbling services. user_props holds
--    nothing else in this codebase, and ListenBrainz is the only such service
--    left, so every other key belongs to a removed service.
DELETE FROM user_props
WHERE key <> 'ListenBrainzSessionKey';

-- 3. Plays still queued for a scrobbler this build no longer has: anything that
--    is neither ListenBrainz nor an installed plugin (a plugin scrobbler queues
--    under its plugin id).
DELETE FROM scrobble_buffer
WHERE service <> 'listenbrainz'
  AND service NOT IN (SELECT id FROM plugin WHERE id IS NOT NULL);

-- +goose Down

SELECT 1;
