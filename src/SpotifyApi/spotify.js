export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://localhost:3000/";

const clientid = "436ad6db7f554c3784e342b8d47d878e";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientid}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
