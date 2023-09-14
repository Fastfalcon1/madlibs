var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})

module.exports = router;


function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  }else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `There once was a ${formData.adjective1} man who was lonely. he was a prince in search of a ${formData.noun1}. It was the only thing he was interested in, as he had everything else in the world. 
  As he ${formData.verb1} the fire, he saw something that caught his eye. It was a ${formData.adjective2} ${formData.noun2}`
}

function generateStory2(formData){
  return `Twas a dark and stormy ${formData.noun1}. The ${formData.adjective} pumpkins started to ${formData.verb1}!`
}

function generateStory3(formData){
  return `Twas a dark and stormy ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}!`
}