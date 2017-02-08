module.exports = {
  domain: 'E',
  title: 'Extraversion',
  shortDescription: 'Extraversion is marked by pronounced engagement with the external world.',
  description: `Extraversion is marked by pronounced engagement with the external
world. Extraverts enjoy being with people, are full of energy, and
often experience positive emotions. They tend to be enthusiastic,
action-oriented, individuals who are likely to say "Yes!" or "Let's
go!" to opportunities for excitement. In groups they like to talk,
assert themselves, and draw attention to themselves.

Introverts lack the exuberance, energy, and activity levels of
extraverts. They tend to be quiet, low-key, deliberate, and
disengaged from the social world. Their lack of social involvement
should not be interpreted as shyness or depression; the
introvert simply needs less stimulation than an extravert and prefers
to be alone. The independence and reserve of the introvert is
sometimes mistaken as unfriendliness or arrogance. In reality, an
introvert who scores high on the agreeableness dimension will not
seek others out but will be quite pleasant when approached.`,
  results: [
    {
      score: 'negative',
      text: `Your score on Extraversion is low, indicating you are
introverted, reserved, and quiet. You enjoy solitude and solitary
activities. Your socializing tends to be restricted to a few close
friends.`
    },
    {
      score: 'neutral',
      text: `Your score on Extraversion is average, indicating you are
neither a subdued loner nor a jovial chatterbox. You enjoy time with
others but also time alone.`
    },
    {
      score: 'positive',
      text: `Your score on Extraversion is high, indicating you are
sociable, outgoing, energetic, and lively. You prefer to be around
people much of the time.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Friendliness',
      text: `Friendly people genuinely like other people
and openly demonstrate positive feelings toward others. They make
friends quickly and it is easy for them to form close, intimate
relationships. Low scorers on Friendliness are not necessarily cold
and hostile, but they do not reach out to others and are perceived
as distant and reserved. Your level of friendliness is {{score}}`
    },
    {
      facet: 2,
      title: 'Gregariousness',
      text: `Gregarious people find the company of
others pleasantly stimulating and rewarding. They enjoy the
excitement of crowds. Low scorers tend to feel overwhelmed by, and
therefore actively avoid, large crowds. They do not necessarily
dislike being with people sometimes, but their need for privacy and
time to themselves is much greater than for individuals who score
high on this scale. Your level of gregariousness is {{score}}`
    },
    {
      facet: 3,
      title: 'Assertiveness',
      text: `High scorers Assertiveness like to speak
 out, take charge, and direct the activities of others. They tend to
 be leaders in groups. Low scorers tend not to talk much and let
 others control the activities of groups. Your level of
 assertiveness is {{score}}`
    },
    {
      facet: 4,
      title: 'Activity Level',
      text: `Active individuals lead fast-paced, busy
 lives. They move about quickly, energetically, and vigorously, and
 they are involved in many activities. People who score low on this
 scale follow a slower and more leisurely, relaxed pace. Your
 activity level is {{score}}`
    },
    {
      facet: 5,
      title: 'Excitement-Seeking',
      text: `High scorers on this scale are easily
bored without high levels of stimulation. They love bright lights
and hustle and bustle. They are likely to take risks and seek
thrills. Low scorers are overwhelmed by noise and commotion and are
adverse to thrill-seeking. Your level of excitement-seeking is
{{score}}`
    },
    {
      facet: 6,
      title: 'Cheerfulness',
      text: `This scale measures positive mood and
feelings, not negative emotions (which are a part of the
Neuroticism domain). Persons who score high on this scale typically
experience a range of positive feelings, including happiness,
enthusiasm, optimism, and joy. Low scorers are not as prone to such
energetic, high spirits. Your level of positive emotions is
{{score}}.`
    }
  ]
}