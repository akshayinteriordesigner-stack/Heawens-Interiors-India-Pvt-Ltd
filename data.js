var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.027091874361886426,
        "pitch": 0.0018502203646804105,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.9064190200569335,
          "pitch": 0.14851020301563622,
          "rotation": 0.7853981633974483,
          "target": "1-prayer-and-seting"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-prayer-and-seting",
      "name": "PRAYER AND SETING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.3380171572158073,
        "pitch": 0.008225212019567607,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.8309453824453268,
          "pitch": 0.02503887862507881,
          "rotation": 0,
          "target": "2-dining-room"
        },
        {
          "yaw": 2.982748180836234,
          "pitch": 0.19640304250898843,
          "rotation": 5.497787143782138,
          "target": "0-living-room"
        },
        {
          "yaw": 1.3603825568312988,
          "pitch": 0.1210181392769023,
          "rotation": 0.7853981633974483,
          "target": "3-kitchen-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-room",
      "name": "DINING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.050543739180867,
          "pitch": 0.026090999667385262,
          "rotation": 4.71238898038469,
          "target": "3-kitchen-"
        },
        {
          "yaw": 0.039968395996631045,
          "pitch": 0.1279873263135869,
          "rotation": 0,
          "target": "1-prayer-and-seting"
        },
        {
          "yaw": -0.5044613434650067,
          "pitch": 0.01983499248053633,
          "rotation": 4.71238898038469,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen-",
      "name": "KITCHEN ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.17184780327329463,
        "pitch": 0.012946523286249345,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.8269787174145176,
          "pitch": 0.11269994064690536,
          "rotation": 5.497787143782138,
          "target": "4-kitchen-2"
        },
        {
          "yaw": -1.471194122087942,
          "pitch": 0.10603101638546164,
          "rotation": 5.497787143782138,
          "target": "2-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen-2",
      "name": "KITCHEN 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.9880930789014286,
        "pitch": 0.01142662472429734,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.3825185007114058,
          "pitch": 0.10737824615819491,
          "rotation": 0,
          "target": "3-kitchen-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
