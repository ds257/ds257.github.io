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

## Beyond California

Still filling this section in as I travel — Seattle and the PNW trail scene are next on the list.
If you've got a route worth the detour, [send it my way](mailto:dsaraf2@jhu.edu).

<script>
document.addEventListener('DOMContentLoaded', function() {
  var spots = [
    { name: "Crissy Field \u2192 Golden Gate Bridge", area: "Bay Area", lat: 37.8036, lng: -122.4657, note: "Flat out along the water, climb to the bridge for extra mileage." },
    { name: "Golden Gate Park", area: "Bay Area", lat: 37.7694, lng: -122.4862, note: "Car-free JFK Drive on weekends; soft-surface loops available." },
    { name: "Marin Headlands (Rodeo Beach)", area: "Bay Area", lat: 37.8324, lng: -122.5410, note: "Vert and ocean views; bring layers for the wind." },
    { name: "Lake Merritt", area: "Bay Area", lat: 37.8044, lng: -122.2606, note: "3.4 mi flat loop, lit at night." },
    { name: "Guadalupe River Trail, Santa Clara", area: "Bay Area", lat: 37.3541, lng: -121.9552, note: "Flat, paved, shaded — near SCU." },
    { name: "Griffith Park", area: "LA", lat: 34.1365, lng: -118.2942, note: "Fire road + single track, observatory loop for the view." },
    { name: "Runyon Canyon", area: "LA", lat: 34.1078, lng: -118.3487, note: "Short and steep; go early." },
    { name: "Santa Monica \u2192 Venice Boardwalk", area: "LA", lat: 34.0060, lng: -118.4770, note: "Flat, fast, people-watching-heavy." },
    { name: "Rose Bowl Loop, Pasadena", area: "LA", lat: 34.1613, lng: -118.1676, note: "3.1 mi flat paved loop, social-run energy." },
    { name: "Manhattan Beach Strand", area: "LA", lat: 33.8847, lng: -118.4109, note: "Oceanfront paved path the length of the Strand." }
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
