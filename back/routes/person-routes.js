const personRouter = require('express').Router();
const db = require('../models');

const getPeople = (req, res) => {
  db.Person.findAll()
  .then((people) => {
    res.send(people);
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

const makePerson = (req, res) => {
  db.Person.create({
    name: 'Sean',
    favoriteCity: 'New York',
  })
  .then((newPerson) => {
    res.send(newPerson);
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

const lastPerson = (req, res) => {
  let newestPersonInDatabase = [];
  db.Person.findAll()
    .then((allPeople) => {
      newestPersonInDatabase = allPeople[allPeople.length - 1];
      res.send(newestPersonInDatabase);
    });
};

const updateCity = (req, res) => {
  db.Person.update(
    { favoriteCity: 'Brooklyn' },
    { where: {
      name: 'Sean',
    },
    })
  .then((person) => {
    let lastPersonCreated = [];
    if (person) {
      db.Person.findAll()
      .then((allPeople) => {
        lastPersonCreated = allPeople[allPeople.length - 1];
        res.send(lastPersonCreated);
      });
    }
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

const findAPerson = (req, res) => {
  db.Person.findById(req.params.id)
  .then((person) => {
    res.send(person);
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

const deleteAPerson = (req, res) => {
  db.Person.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((person) => {
    if (person) {
      res.send('Delete Successful.');
    }
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
};

//-----------------------------------
personRouter.route('/')
  .get(getPeople)
  .post(makePerson)
  .put(updateCity);

personRouter.route('/:id')
  .get(findAPerson)
  .delete(deleteAPerson);

personRouter.route('/last/person/created')
  .get(lastPerson);

module.exports = personRouter;
