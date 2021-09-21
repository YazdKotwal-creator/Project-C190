//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
        speedOfRoation: { type: "number", default: 0 },
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                if (this.data.speedOfRoation < 0.1) {
                    this.data.speedOfRoation += 0.01;
                }
            }
            if (e.key === "ArrowLeft") {
                if (this.data.speedOfRoation > -0.1) {
                    this.data.speedOfRoation -= 0.01;
                }
            }
        });
    },
    tick: function () {
        var mapRotation = this.el.getAttribute("rotation");

        mapRotation.y += this.data.speedOfRoation;

        this.el.setAttribute("rotation", {
            x: mapRotation.x,
            y: mapRotation.y,
            z: mapRotation.z,
        });
    }
});

//car velocity
AFRAME.registerComponent("car-velocity-reader", {
    schema: {
        carSpeed: { type: "number", default: 0 },
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowUp") {
                if (this.data.carSpeed < 0.1) {
                    this.data.carSpeed += 0.01;
                }
            }
            if (e.key === "ArrowDown") {
                if (this.data.carSpeed > -0.1) {
                    this.data.carSpeed -= 0.01;
                }
            }
        });
    },
    tick: function () {
        var carVelocity = this.el.getAttribute("position");

        carVelocity.z += this.data.speedOfPosition;

        this.el.setAttribute("position", {
            x: carVelocity.x,
            y: carVelocity.y,
            z: carVelocity.z,
        });
    }
});