/* 1. Search Soundcload*/


/* 2. Query Soundcloud API*/
SC.initialize({
    client_id: 'YOUR_CLIENT_ID'
  });
  
  // find all sounds of buskers licensed under 'creative commons share alike'
  SC.get('/tracks', {
    q: 'buskers', license: 'cc-by-sa'
  }).then(function(tracks) {
    console.log(tracks);
  });

/* 3. Display the cards*/


/* 4. Add to playlist and play*/

