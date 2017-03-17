# Ride-Care Technical Detail

## Team Members

Nico Flicker
Tom Miller
Therese Pacete
Yen La

## Project Description
Ride-Care is an app for people who use the LA Metro public transportation system. It is designed to help riders get off the bus at the right time. Currently, bus public address systems and drivers are inconsistent in announcing bus stops. It is easy for a rider to miss his/her stop, and missing a stop can have serious consequences. 

Ride-Care is designed to alert a rider of approaching bus stop. The rider uses a smartphone to enter his/her LA Metro route and destination stop. The app detects the rider's location and traces his/her location while riding the bus. The rider also indicated the time (in minutes) needed prior to being notified of an impending stop. 

## How it Works

The user chooses his/her route number/name.

We access the LA Metro API to get the list of stops for that route number/name. This is the bus stop array. The bus stops are associated with latitude and longitude values.
We provide a drop-down list for the user to choose his/her current/origin stop. 

We provide a drop-down list for the user to choose his/her destination stop.

From the origin and destination stops the app determines the direction of travel (direction to move along the bus stop arrray). The app determines the stop before the destination stop. The app accesses the user's smartphone to determine the current latitude and longitude of the user (where the bus is located as it travels along its route).

When the user's location is within a certain small distance from the bus stop just before the user's destination stop, an alarm is sounded to alert the user. 




