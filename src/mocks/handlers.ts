import { delay, http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://ws.audioscrobbler.com/2.0', async () => {
    // Await a random realistic server response time.
    await delay();

    // return new HttpResponse(null, { status: 401 });
    return HttpResponse.json(
      {
        recenttracks: {
          track: [{ artist: { '#text': 'Ohmme' }, name: 'Fashion' }],
        },
      },
      { status: 200 }
    );
  }),

  http.post('https://accounts.spotify.com/api/token', async () => {
    // Await a random realistic server response time.
    await delay();

    // return new HttpResponse(null, { status: 401 });
    return HttpResponse.json({ access_token: 'token' }, { status: 200 });
  }),

  http.get('https://api.spotify.com/v1/search', async () => {
    // Await a random realistic server response time.
    await delay();

    // return new HttpResponse(null, { status: 401 });

    return HttpResponse.json(
      {
        tracks: {
          items: [
            {
              artists: [{ name: 'Motoi Sakuraba' }],
              name: 'Gwyn, Lord of Cinder',
              uri: 'spotify:track:70c9dfe818ad4644',
            },
          ],
        },
      },
      { status: 200 }
    );
  }),
];
