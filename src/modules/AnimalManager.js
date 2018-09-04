const remoteURL = "http://localhost:5002"

export default Object.create(null, {
  get: {
    value: function (id) {
      return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
    }
  },
  getAll: {
    value: function () {
      return fetch(`${remoteURL}/animals`).then(e => e.json())
    }
  },
  getAllEmployees: {
    value: function () {
      return fetch(`${remoteURL}/employees`).then(e => e.json())
    }
  },
  getAllLocations: {
    value: function () {
      return fetch(`${remoteURL}/locations`).then(e => e.json())
    }
  },
  getAllOwners: {
    value: function () {
      return fetch(`${remoteURL}/owners`).then(e => e.json())
    }
  },
  AnimalPost: {
    value: function (newAnimal) {
      return fetch(`${remoteURL}/animals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
      }).then(e => e.json())
    }
  },
  locationPost: {
    value: function (newLocation) {
      return fetch(`${remoteURL}/locations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newLocation)
      }).then(e => e.json())
    }
  },
  ownerPost: {
    value: function (newOwner) {
      return fetch(`${remoteURL}/owner`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newOwner)
      }).then(e => e.json())
    }
  },
  update: {
    value: function (animal, id) {
      return fetch(`${remoteURL}/animals/${id}`, {
        method: "Put",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(animal)
      }).then(e => e.json())
    }
  }
})