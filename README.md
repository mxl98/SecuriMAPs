[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

# SecuriMAPs
Repo for SecuriMAPs app

A single-page application (SPA). Its main purpose is to indicate dangerous roads and intersections in cities by displaying a heatmap of recorded road collisions and accidents, and predicting danger zones through machine learning, with the goal of improving road security and danger visibility.

N.B. this application is a personnal project dedicated to learning the technologies and a Work-In-Progress. The current state may not reflect the final product or guarantee one.

## Tech Stack
- Frontend: Angular v18
- Backend: .NET Core, Python
- Database: MySQL

## Packages

Nuget packages used in the app

| Package                          | NuGet           |
| ---------------------------------|:---------------:|
| Swashbuckle.AspNetCore           | [![NuGet Swashbuckle.AspNetCore](https://img.shields.io/nuget/v/Swashbuckle.AspNetCore.svg?style=flat)](https://www.nuget.org/packages/swashbuckle.aspnetcore/) |
| CSVHelper                        | [![NuGet CsvHelper](https://img.shields.io/nuget/v/CsvHelper.svg?style=flat)](https://www.nuget.org/packages/CsvHelper/) |

## Features
### Current
- Interactible map
- Continuous support for mobile
- Dark mode with high contrast
- Heatmap display of road collisions[^1]

### Upcoming
- Replacing frontend data treatment with backend and database for storage
- Toggleable layers
- More layers

## Notes
[^1]: [#] Ville de Montréal, Collisions routières, Montréal: Open Data City of Montreal, 2025. [Dataset]. Available: https://donnees.montreal.ca/en/dataset/collisions-routieres. [consulted on March 04, 2025].