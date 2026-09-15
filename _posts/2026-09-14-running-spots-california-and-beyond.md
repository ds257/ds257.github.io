---
title: "Running Spots: Bay Area, LA, and Beyond"
categories: [running]
has_map: true
excerpt: "A running list (pun intended) of routes worth the detour — starting with the Bay Area and greater LA, growing as I travel."
---

A running list, literally — I'll keep adding to this as I find new routes. Map below has every spot on
this page; click a pin for the one-line version.

<div id="run-map" style="height: 420px; border-radius: 6px; margin: 20px 0;"></div>

## Bay Area

- **Crissy Field &rarr; Golden Gate Bridge, San Francisco** — flat out along the water, then a climb up
  to the bridge if you want the mileage. Best early, before the fog burns off and the crowds show up.
- **Golden Gate Park, San Francisco** — closed to cars on JFK Drive on weekends; enough looped trail
  and soft-surface options (Bercut equestrian trail) to build a long run without repeating pavement.
- **Marin Headlands** — for when you want vert. Rodeo Beach up to the old bunkers has some of the best
  ocean views of any run in the Bay, but bring layers, the wind does not care about your plans.
- **Lake Merritt, Oakland** — 3.4 mi flat loop around the lake, lit at night, good for an easy
  shakeout day.
- **Guadalupe River Trail, Santa Clara** — flat, paved, and shaded most of the way; an easy add-on
  if you're already down near SCU.
- **Santa Clara Central Park** — a paved perimeter loop plus a duck pond, five minutes from campus;
  good for an easy day.
- **Ulistac Natural Area** — dirt trails through restored wetland right on the Guadalupe River, quieter
  and shadier than the paved trail next door.
- **Bay Trail at Alviso Marina** — flat out along the salt marshes at the bottom of the Bay; open sky,
  herons, and almost no one else out there on a weekday.

## Greater LA

- **Griffith Park, Los Feliz** — the default answer for a reason: miles of fire road and single track,
  with the Griffith Observatory loop as the classic add-on for a view payoff.
- **Runyon Canyon, Hollywood Hills** — short but steep; go early if you want the trail to yourself
  instead of a line for the summit photo.
- **Santa Monica &rarr; Venice boardwalk** — flat, fast, and people-watching-heavy; good for tempo
  work when you don't want to think about footing.
- **Rose Bowl loop, Pasadena** — 3.1 mi flat paved loop, popular enough that it doubles as a social run
  most mornings.
- **Manhattan Beach Strand** — the paved path running the length of the Strand; flat, oceanfront, and a
  good excuse to end at a coffee shop on Manhattan Beach Blvd.
- **Exposition Park, near USC** — the rose garden loop plus the paths around the Coliseum and Natural
  History Museum; short, but an easy default when you're on campus.
- **Kenneth Hahn State Recreation Area** — a short drive from USC, with real hills for a change and a
  view over the city from the top.
- **LA River Bike Path, Frogtown/Elysian Valley** — flat riverside path with less foot traffic than the
  beach paths; a good tempo option if you're near downtown.

## Beyond California

- **Lake Montebello, Baltimore** — the go-to loop near JHU: 1.35 mi flat, paved, and busy enough at
  most hours that it feels social rather than isolating.

Still filling this section in as I travel. If you've got a route worth the detour,
[send it my way](mailto:dsaraf2@jhu.edu).

<script>
document.addEventListener('DOMContentLoaded', function() {
  var spots = [
    { name: "Crissy Field \u2192 Golden Gate Bridge", area: "Bay Area", lat: 37.8036, lng: -122.4657, note: "Flat out along the water, climb to the bridge for extra mileage." },
    { name: "Golden Gate Park", area: "Bay Area", lat: 37.7694, lng: -122.4862, note: "Car-free JFK Drive on weekends; soft-surface loops available." },
    { name: "Marin Headlands (Rodeo Beach)", area: "Bay Area", lat: 37.8324, lng: -122.5410, note: "Vert and ocean views; bring layers for the wind." },
    { name: "Lake Merritt", area: "Bay Area", lat: 37.8044, lng: -122.2606, note: "3.4 mi flat loop, lit at night." },
    { name: "Guadalupe River Trail, Santa Clara", area: "Bay Area", lat: 37.3541, lng: -121.9552, note: "Flat, paved, shaded — near SCU." },
    { name: "Santa Clara Central Park", area: "Bay Area", lat: 37.3466, lng: -121.9721, note: "Paved perimeter loop, five minutes from campus." },
    { name: "Ulistac Natural Area", area: "Bay Area", lat: 37.3945, lng: -121.9553, note: "Dirt trails through wetland along the Guadalupe River." },
    { name: "Bay Trail at Alviso Marina", area: "Bay Area", lat: 37.4267, lng: -121.9754, note: "Flat, open, salt-marsh views at the bottom of the Bay." },
    { name: "Griffith Park", area: "LA", lat: 34.1365, lng: -118.2942, note: "Fire road + single track, observatory loop for the view." },
    { name: "Runyon Canyon", area: "LA", lat: 34.1078, lng: -118.3487, note: "Short and steep; go early." },
    { name: "Santa Monica \u2192 Venice Boardwalk", area: "LA", lat: 34.0060, lng: -118.4770, note: "Flat, fast, people-watching-heavy." },
    { name: "Rose Bowl Loop, Pasadena", area: "LA", lat: 34.1613, lng: -118.1676, note: "3.1 mi flat paved loop, social-run energy." },
    { name: "Manhattan Beach Strand", area: "LA", lat: 33.8847, lng: -118.4109, note: "Oceanfront paved path the length of the Strand." },
    { name: "Exposition Park, near USC", area: "LA", lat: 34.0141, lng: -118.2879, note: "Rose garden loop, five minutes from campus." },
    { name: "Kenneth Hahn State Recreation Area", area: "LA", lat: 34.0011, lng: -118.3719, note: "Real hills close to USC, city views from the top." },
    { name: "LA River Bike Path, Frogtown", area: "LA", lat: 34.0956, lng: -118.2468, note: "Flat riverside path, quieter than the beach paths." },
    { name: "Lake Montebello, Baltimore", area: "Beyond CA", lat: 39.3238, lng: -76.5988, note: "1.35 mi flat paved loop, the go-to near JHU." }
  ];

  var map = L.map('run-map', { scrollWheelZoom: false }).setView([35.9, -120.4], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  var bounds = [];
  spots.forEach(function(spot) {
    var marker = L.marker([spot.lat, spot.lng]).addTo(map);
    marker.bindPopup('<b>' + spot.name + '</b><br>' + spot.note);
    bounds.push([spot.lat, spot.lng]);
  });

  map.fitBounds(bounds, { padding: [30, 30] });
});
</script>
