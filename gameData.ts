import { GameData } from './types';

export const gameData: GameData = {
  // Jerry's Story
  jerry_start: {
    text: "You're at Monk's with George. Your new girlfriend, {{girlfriendName}}, is on her way. The only problem? She eats her peas one at a time. It's driving you crazy.",
    choices: [
      { text: "Complain to George about the pea situation.", nextScene: "jerry_george_advice" },
      { text: "Ask Kramer for advice when he slides into the booth.", nextScene: "jerry_kramer_advice" },
      { text: "Just ignore it. It's not a big deal... is it?", nextScene: "jerry_ignore" }
    ]
  },
  jerry_george_advice: {
    text: "George is aghast. 'One pea at a time, Jerry! It's perverse! You have to say something. It's a window into her soul!'",
    choices: [
      { text: "Maybe George is right. I'll confront her.", nextScene: "jerry_confront_plan" },
      { text: "This is too much pressure. I'll just break up with her.", nextScene: "jerry_breakup" }
    ]
  },
  jerry_kramer_advice: {
    text: "Kramer's eyes widen. 'The single pea, Jerry! It's a power move! You need a counter-move. I've got just the thing.' He hands you a small, odd-looking fork with too many prongs.",
    choices: [
      { text: "Take the strange fork.", nextScene: "jerry_fork_taken", givesItem: "Kramer's Fork" },
      { text: "Decline the fork. It looks dangerous.", nextScene: "jerry_ignore" }
    ]
  },
  jerry_fork_taken: {
      text: "You pocket Kramer's... utensil. {{girlfriendName}} arrives. As she starts on her peas, you remember Kramer's advice.",
      choices: [
          { text: "Use Kramer's Fork to eat your own food dramatically.", nextScene: "jerry_use_fork", requiresItem: "Kramer's Fork" },
          { text: "Never mind the fork. Confront her about the peas.", nextScene: "jerry_confront_plan" }
      ]
  },
  jerry_use_fork: {
      text: "You pull out Kramer's fork and start eating your salad with absurd, theatrical scooping motions. {{girlfriendName}} stares, then bursts out laughing. 'Is that to mock my pea-eating?' She finds it hilarious. The ice is broken.",
      choices: [
          { text: "Laugh with her. 'Maybe I was.' Propose going back to your place.", nextScene: "jerry_apartment_invite" }
      ]
  },
  jerry_apartment_invite: {
    text: "She agrees. Back at your apartment, you turn on a movie. You're about to make your move. It's the perfect moment... unless the universe, as it often does, has other plans.",
    choices: [
        { text: "See what happens next.", nextScene: "jerry_apartment_random_event" }
    ]
  },
  jerry_apartment_random_event: {
      text: "", // This scene is just a silent router
      choices: [
          { text: "", nextScene: "jerry_george_interrupt_call"},
          { text: "", nextScene: "jerry_elaine_interrupt_knock"},
          { text: "", nextScene: "jerry_kramer_interrupt_barge"},
          { text: "", nextScene: "jerry_quiet_night"}
      ]
  },
  jerry_quiet_night: {
      text: "You wait. Nothing happens. The phone is silent. The door remains un-knocked upon. There are no sudden Kramer entrances. It's... a successful date. A bizarre and unfamiliar feeling.",
      choices: [
          { text: "This is it! I've done it!", nextScene: "jerry_win" }
      ]
  },
  jerry_george_interrupt_call: {
      text: "The phone rings shrilly. It's George, and he sounds like he's at the bottom of a well. 'Jerry! It's a disaster! A complete disaster! Remember that job interview?!'",
      choices: [
          { text: "Put him on speaker so {{girlfriendName}} can hear the madness.", nextScene: "jerry_george_speaker"},
          { text: "Whisper that you'll call him back.", nextScene: "jerry_george_whisper"}
      ]
  },
  jerry_george_speaker: {
      text: "You put him on speaker. George's hysterical rant about 'Vandelay Industries' and 'latex' fills the room. {{girlfriendName}} is utterly bewildered. The mood is irrevocably destroyed. She leaves, convinced your friends are inmates.",
      choices: [],
      ending: "lost"
  },
  jerry_george_whisper: {
      text: "You whisper, 'George, I can't talk!' He just yells louder. 'BUT THE LATEX, JERRY!' {{girlfriendName}} raises an eyebrow. 'Latex?' It's a whole thing. You spend the next hour explaining. The romance is gone, vanished into a puff of neurotic smoke.",
      choices: [],
      ending: "lost"
  },
  jerry_elaine_interrupt_knock: {
      text: "There's a frantic knock on the door. It's Elaine. 'Jerry, you are not going to believe what Peterman just did. He loved it. LOVED it! The Urban Sombrero! I'm ruined!'",
      choices: [
          { text: "Let her in to vent.", nextScene: "jerry_elaine_vent"},
          { text: "Pretend you're not home.", nextScene: "jerry_elaine_hide"}
      ]
  },
  jerry_elaine_vent: {
      text: "Elaine comes in and flops on your couch, ranting about sombreros and Bob Sacamano. {{girlfriendName}} is polite but it's clear the date is now a therapy session. Eventually, {{girlfriendName}} 'remembers' she has an early morning. The date is over.",
      choices: [],
      ending: "lost"
  },
  jerry_elaine_hide: {
      text: "You stay silent. Elaine keeps knocking. 'I know you're in there, Jerry!' Then she yells, 'Is that pea-girl in there with you?!' The secret is out. {{girlfriendName}} is offended. 'Pea-girl?' The night is over before it began.",
      choices: [],
      ending: "lost"
  },
  jerry_kramer_interrupt_barge: {
      text: "The door bursts open and Kramer slides in, holding a bottle of beige liquid. 'Jerry my man, you've gotta smell this! It's 'The Beach'! Just one whiff and you're transported!' He sprays it. The room fills with the scent of low tide and sunscreen.",
      choices: [
          { text: "Play along for a second.", nextScene: "jerry_kramer_humor"},
          { text: "Tell him to get out.", nextScene: "jerry_kramer_get_out"}
      ]
  },
  jerry_kramer_humor: {
      text: "You take a sniff. 'It's pungent, Kramer.' {{girlfriendName}} coughs. The smell is clinging to the upholstery. 'It's... memorable,' she says, inching towards the door. The apartment is now uninhabitable for romance.",
      choices: [],
      ending: "lost"
  },
  jerry_kramer_get_out: {
      text: "You shout 'Get out, Kramer!' He's offended, stumbles backward, and spills the cologne all over the rug. The smell is permanent. Your apartment is ruined, and so is your date. The scent of 'The Beach' will haunt you for weeks.",
      choices: [],
      ending: "lost"
  },
  jerry_ignore: {
    text: "You decide to let it go. But every time she eats a pea, you twitch. She notices. 'Is something wrong?' she asks. The pressure is immense.",
    choices: [
      { text: "It's nothing, just... thinking about comedy.", nextScene: "jerry_fester" },
      { text: "You know what, it's the peas! THE PEAS!", nextScene: "jerry_confront_outburst" }
    ]
  },
  jerry_confront_plan: {
      text: "{{girlfriendName}} arrives. You've decided to bring it up. How do you approach this delicate situation?",
      choices: [
          {text: "Wait for a quiet moment and ask gently.", nextScene: "jerry_confront_gently"},
          {text: "Make a joke about it.", nextScene: "jerry_confront_joke"}
      ]
  },
  jerry_confront_gently: {
      text: "Later, you gently ask, 'I noticed you eat your peas one at a time...' She explains it's a little mindfulness exercise her therapist recommended. It's a bit odd, but you understand. You've navigated a classic Jerry-level crisis.",
      choices: [
          {text: "Accept her explanation and invite her over.", nextScene: "jerry_apartment_invite"}
      ]
  },
  jerry_confront_joke: {
      text: "You joke, 'Are you trying to save some for later?' She doesn't laugh. 'Are you critiquing how I eat? My last boyfriend did that.' The mood is ruined. The check can't come fast enough.",
      choices: [],
      ending: "lost"
  },
  jerry_fester: {
    text: "You try to ignore it, but the resentment builds. The relationship is doomed, slowly poisoned by tiny green spheres. This is how it ends, not with a bang, but with a pea.",
    choices: [],
    ending: "lost"
  },
  jerry_confront_outburst: {
    text: "{{girlfriendName}} is horrified. 'You're judging my pea-eating technique? It's over!' She storms out of Monk's, leaving you with the check and a bowl of rapidly cooling peas.",
    choices: [],
    ending: "lost"
  },
  jerry_breakup: {
    text: "You break up with her over a perceived pea-protocol violation. Even for you, this is a new low. You end up alone, again, at Monk's, master of a domain of one.",
    choices: [],
    ending: "lost"
  },
  jerry_win: {
    text: "In a rare twist of fate, the evening was a success. You navigated the pea situation, and no one interrupted. The relationship might just last... until she reveals she chews her cereal with her mouth open. The cycle begins anew.",
    choices: [],
    ending: "won"
  },
  
  // George's Stories
  george_start_architect: {
    text: "You've landed an interview for an architect job. You lied on your resume, claiming to have designed the new Guggenheim addition. The interviewer, Mr. Pensky, asks, 'Who was your lead collaborator on that?'",
    choices: [
      { text: "Claim you were the sole visionary.", nextScene: "george_sole_visionary" },
      { text: "Invent a collaborator. 'Art Vandelay.'", nextScene: "george_invent_vandelay" },
      { text: "Spot a business card holder on the reception desk. Grab one.", nextScene: "george_grab_card", givesItem: "Importer/Exporter Business Card"}
    ]
  },
  george_grab_card: {
    text: "You pocket a generic business card. It reads 'Vandelay Industries - Importers/Exporters'. This could be useful. Mr. Pensky is waiting.",
    choices: [
        { text: "Invent a collaborator. 'Art Vandelay.'", nextScene: "george_invent_vandelay" }
    ]
  },
  george_sole_visionary: {
    text: "'The sole visionary?' Mr. Pensky raises an eyebrow. 'That's not what my contacts at the Guggenheim said.' You've been caught. You need to do something!",
    choices: [
        { text: "Call Jerry in a panic.", nextScene: "george_calls_jerry_for_help" },
        { text: "Confess everything in a sweaty, rambling monologue.", nextScene: "george_architect_lost" }
    ]
  },
  george_invent_vandelay: {
    text: "'Art Vandelay,' you say confidently. Mr. Pensky's eyes light up. 'Vandelay! Of course! The importer/exporter! I know him!' He's clearly thinking of someone else, but your lie has accidentally landed.",
    choices: [
      { text: "Agree enthusiastically. 'Yes! That's him!'", nextScene: "george_double_down" },
      { text: "Use your business card as proof.", nextScene: "george_use_card", requiresItem: "Importer/Exporter Business Card"},
      { text: "Look confused. 'Importer/exporter?'", nextScene: "george_question_lie" }
    ]
  },
  george_use_card: {
      text: "You slide the card across the table. 'He gave me this.' Mr. Pensky examines it. 'Ah, yes! Vandelay Industries!' Your lie is now concrete, a beautiful, terrifying structure.",
      choices: [
        { text: "Double down. 'His real passion is latex!'", nextScene: "george_latex_lie" }
      ]
  },
  george_double_down: {
    text: "You ride the wave. 'He dabbles in architecture, but his real passion is latex!' you exclaim. Mr. Pensky laughs. 'A man of many talents! I like that. What's he working on now?'",
    choices: [
      { text: "'He's... in Peru. Researching coffee tables.'", nextScene: "george_win_architect" },
      { text: "'He's developing a new type of latex.'", nextScene: "george_latex_lie" }
    ]
  },
   george_latex_lie: {
      text: "'Latex? Perfect!' says Mr. Pensky. 'Our firm is a subsidiary of a major latex manufacturer!' He starts asking technical questions about tensile strength. You're trapped in a prison of your own design.",
      choices: [
        { text: "Call Jerry in a panic.", nextScene: "george_calls_jerry_for_help" },
        { text: "Flee the interview, shouting about a fire.", nextScene: "george_architect_lost" }
      ]
  },
  george_question_lie: {
    text: "Your hesitation is your undoing. 'You... thought?' Mr. Pensky's demeanor cools. The interview is over. You're left alone with your tangled web.",
    choices: [],
    ending: "lost"
  },
  george_calls_jerry_for_help: {
    text: "You excuse yourself to the restroom and frantically call Jerry. 'Jerry, help me! They're asking about latex! What do I know about latex?!' Jerry sounds distracted. 'Not now, George!' You hear a woman's voice. He hangs up on you! You're on your own.",
    choices: [
        { text: "Return to the interview and face the music.", nextScene: "george_architect_lost" }
    ]
  },
  george_architect_lost: {
    text: "You failed to secure the job. As you leave, you see them hiring another man. His name tag reads 'Art Vandelay'. The universe has a cruel sense of humor.",
    choices: [],
    ending: "lost"
  },
  george_win_architect: {
    text: "You got the job! Mr. Pensky is impressed. 'Your first assignment,' he says, beaming, 'is to lead the design for the new addition to the Guggenheim.' Your lie has become your life.",
    choices: [],
    ending: "won"
  },

  george_start_bahasian: {
    text: "To get a job at J. Peterman, you claimed fluency in Bahasian. Now, Peterman is testing you. 'George, our new client from the Bahamas is here. Entertain him!'",
    choices: [
        { text: "Attempt to speak 'Bahasian' using gibberish.", nextScene: "george_bahasian_gibberish" },
        { text: "Create a diversion! Fake a dizzy spell.", nextScene: "george_bahasian_dizzy_fail" }
    ]
  },
  george_bahasian_gibberish: {
    text: "You start spouting nonsense. 'Hey mon! We be jammin' with da catalog, ya know?' The client looks confused, then smiles. 'You must be from the north side of the island! Your dialect is charming!' He seems to buy it.",
    choices: [
      { text: "Double down. Invite him to discuss business.", nextScene: "george_bahasian_business" }
    ]
  },
  george_bahasian_business: {
    text: "The client suggests, 'Let us discuss the new campaign... in my native tongue, of course!' You're trapped. You need an escape.",
    choices: [
      { text: "Suggest lunch at a specific, very loud restaurant.", nextScene: "george_win_bahasian" },
      { text: "Frantically call Jerry for an excuse.", nextScene: "george_calls_jerry_for_help" }
    ]
  },
  george_bahasian_dizzy_fail: {
    text: "You feign a dizzy spell and collapse. It's a bit too dramatic. Paramedics are called. You end up with a huge medical bill and no job, all for a language that doesn't exist.",
    choices: [],
    ending: "lost"
  },
  george_win_bahasian: {
      text: "Peterman is so impressed with your 'rapport' that he makes you the permanent Bahasian liaison. You'll have to keep this lie going for the rest of your career. It's the Costanza way.",
      choices: [],
      ending: "won"
  },

  // Elaine's Story
  elaine_start: {
    text: "J. Peterman wants a new, daring idea for the catalog. The pressure is on. What have you got?",
    choices: [
      { text: "Pitch him... 'The Urban Sombrero'.", nextScene: "elaine_sombrero" },
      { text: "Pitch a safe idea: 'Classic English Driving Gloves'.", nextScene: "elaine_gloves" }
    ]
  },
  elaine_sombrero: {
    text: "'The Urban Sombrero?' Peterman's eyes gleam. 'A jaunty, urban feel... Elaine, it's brilliant! Here's the prototype.' He hands you a ridiculously large hat.",
    choices: [
      { text: "Accept the hat. It's your burden now.", nextScene: "elaine_has_sombrero", givesItem: "Urban Sombrero Prototype" },
      { text: "Admit you just made it up.", nextScene: "elaine_confess" }
    ]
  },
  elaine_has_sombrero: {
    text: "You're holding the Urban Sombrero. It's heavier than you imagined, both physically and metaphorically. Peterman wants a supplier.",
    choices: [
        { text: "Suggest Kramer's friend Bob Sacamano.", nextScene: "elaine_sacamano" },
        { text: "'Accidentally' leave the sombrero in a taxi.", nextScene: "elaine_lose_sombrero", requiresItem: "Urban Sombrero Prototype"}
    ]
  },
  elaine_lose_sombrero: {
    text: "You leave the hat in a cab. The next day, Peterman is furious. 'Elaine, that was the only prototype! You've destroyed a dream!' Your act of sabotage was too successful.",
    choices: [],
    ending: "lost"
  },
  elaine_sacamano: {
    text: "You mention Bob Sacamano. Peterman loves the name. He tasks you with tracking him down. The pressure is mounting. You need to vent.",
    choices: [
      { text: "Go to Jerry's apartment to complain.", nextScene: "elaine_goes_to_jerrys" },
      { text: "Wear the sombrero to your meeting with Kramer.", nextScene: "elaine_wear_sombrero", requiresItem: "Urban Sombrero Prototype"}
    ]
  },
  elaine_wear_sombrero: {
    text: "You wear the sombrero to Kramer's. He sees it and his eyes light up. 'That's not just a hat, Elaine. That's a lifestyle!' He says he knows a guy who imports them. The absurdity is escalating.",
    choices: [
        { text: "This is somehow working. Let Kramer handle it.", nextScene: "elaine_win_sombrero" }
    ]
  },
  elaine_goes_to_jerrys: {
    text: "You storm over to Jerry's and knock frantically. You can hear muffled voices, but he's not answering. 'Jerry, I know you're in there!' You give up and go home, defeated by the Sombrero.",
    choices: [],
    ending: "lost"
  },
  elaine_win_sombrero: {
    text: "The Urban Sombrero is a massive, ridiculous success. Your ironic joke has become a fashion statement. As a reward, Peterman makes it part of your mandatory work uniform.",
    choices: [],
    ending: "won"
  },
  elaine_confess: {
    text: "You confess you made it up. Peterman scoffs. 'Spitballing, Elaine? That's not the Peterman way.' He demotes you to writing copy for buttons.",
    choices: [],
    ending: "lost"
  },
  elaine_gloves: {
      text: "Peterman yawns. 'Gloves? Elaine, that's so... pedestrian.' You've kept your job, but he's disappointed. He gives the big new project to Peggy.",
      choices: [],
      ending: "lost"
  },
  
  // Kramer's Story
  kramer_start: {
    text: "Your latest idea: 'The Beach' cologne. The one that smells like the beach. You've created a sample. You need an investor. You need... Jerry.",
    choices: [
      { text: "Go to Jerry's to pitch the idea.", nextScene: "kramer_pitch_jerry" },
      { text: "Test it on Newman first to build a case.", nextScene: "kramer_newman_test" }
    ]
  },
  kramer_pitch_jerry: {
      text: "You barge into Jerry's apartment. He's on the couch with a woman! Perfect, a focus group! You spray the cologne. 'It's the beach, Jerry!' Jerry seems annoyed and kicks you out before you can secure funding.",
      choices: [
        {text: "Your pitch failed. It's over.", nextScene: "kramer_pitch_failed"}
      ]
  },
  kramer_pitch_failed: {
    text: "Without an investor, your cologne empire evaporates like a puddle on a hot day. Kramerica Industries is once again bankrupt.",
    choices: [],
    ending: "lost"
  },
  kramer_newman_test: {
    text: "You tell Newman it's a new 'top secret' postal scent. He eagerly lets you spray him. He recoils. 'Kramer, I smell like a dead fish!' This gives you an idea.",
    choices: [
      { text: "Market it as a high-fashion, challenging scent.", nextScene: "kramer_department_store_plan" },
      { text: "Give up. The dream is dead.", nextScene: "kramer_pitch_failed" }
    ]
  },
  kramer_department_store_plan: {
    text: "This isn't a scent for the common man. This is for the runway! You decide to take your product straight to the source: a high-end department store.",
    choices: [
        { text: "Set up an unofficial kiosk and start spritzing shoppers.", nextScene: "kramer_department_store_chaos" },
        { text: "Politely ask the manager for a meeting.", nextScene: "kramer_department_store_rejected" }
    ]
  },
  kramer_department_store_chaos: {
    text: "You cause a scene near the fragrance counter, accosting shoppers with 'The Beach'. Security is called. But just as they grab you, a well-dressed man pushes through. 'That smell... it's audacious! Who are you?' It's Calvin Klein.",
    choices: [
        { text: "I'm Kramer. And this... is 'The Beach'.", nextScene: "kramer_calvin_klein_deal" }
    ]
  },
  kramer_department_store_rejected: {
    text: "The manager looks at your hand-labeled bottle and laughs you out of the store. 'Come back when you have an appointment, buddy.' The fashion world is a cruel mistress.",
    choices: [],
    ending: "lost"
  },
  kramer_calvin_klein_deal: {
      text: "He's intrigued. 'The struggle of the sea... I like it!' He writes you a check for a million dollars.",
      choices: [
          { text: "Take the check!", nextScene: "kramer_win", givesItem: "Million Dollar Check" }
      ]
  },
  kramer_win: {
      text: "You're a millionaire! You head to Monk's to celebrate. The table is wobbly. Without thinking, you fold up the check and shove it under the table leg. It's perfectly level. Giddyup!",
      choices: [],
      ending: "won"
  },

  // Newman's Secret Story
  newman_start: {
    text: "It's a Tuesday. A perfect day for mischief. You see Jerry walking with a woman you don't recognize. A secret girlfriend! The leverage... it's palpable. What's your first move?",
    choices: [
        { text: "Follow them from a safe distance.", nextScene: "newman_follow" },
        { text: "Check Jerry's trash for clues first.", nextScene: "newman_trash_dive"}
    ]
  },
  newman_trash_dive: {
    text: "You rummage through Jerry's trash. Old cereal boxes, comedy club flyers... and a half-eaten eclair from a fancy bakery. A clue! You pocket the pastry.",
    choices: [
        { text: "You have your clue. Time to follow them.", nextScene: "newman_follow", givesItem: "Half-Eaten Eclair" }
    ]
  },
  newman_follow: {
      text: "You tail them to Monk's. You take the booth behind them, hiding behind a large menu. You can hear snippets. Something about... peas? It's not enough.",
      choices: [
          { text: "Bribe the waitress for information.", nextScene: "newman_bribe_waitress" },
          { text: "Try to listen closer, risking exposure.", nextScene: "newman_listen_closer" }
      ]
  },
  newman_bribe_waitress: {
      text: "You offer the waitress a Drake's Coffee Cake. She's not interested. 'I'm on a diet.' Your usual tactics are failing!",
      choices: [
          { text: "Offer her the fancy eclair.", nextScene: "newman_bribe_eclair", requiresItem: "Half-Eaten Eclair" },
          { text: "Accept defeat. The trail goes cold.", nextScene: "newman_trail_cold" }
      ]
  },
  newman_bribe_eclair: {
    text: "You present the slightly squashed eclair. Her eyes light up. 'Her name's {{girlfriendName}},' she whispers. 'She eats her peas one at a time.' Peas! It's delightfully idiosyncratic. This is gold!",
    choices: [
        { text: "You have the intel. Time to plan the reveal.", nextScene: "newman_plan_reveal" }
    ]
  },
  newman_listen_closer: {
      text: "You lean in too far. The menu slips, and you make eye contact with Jerry. He glares. 'Newman.' The operation is blown. You retreat in shame.",
      choices: [],
      ending: "lost"
  },
  newman_trail_cold: {
      text: "Without the waitress's intel, you have nothing. Jerry wins this round. But the mail never sleeps, and neither does your animosity.",
      choices: [],
      ending: "lost"
  },
  newman_plan_reveal: {
      text: "How will you use this information to torture Jerry? The possibilities are endless.",
      choices: [
          { text: "Tell Kramer, knowing he can't keep a secret.", nextScene: "newman_tell_kramer" },
          { text: "Leave an anonymous, taunting note on Jerry's door.", nextScene: "newman_note" }
      ]
  },
  newman_tell_kramer: {
      text: "You tell Kramer about the pea incident. He finds it fascinating and immediately tells Jerry, ruining your leverage. In your quest for chaos, you forgot the primary rule: never trust Kramer.",
      choices: [],
      ending: "lost"
  },
  newman_note: {
      text: "You type up a note: 'I know about the peas.' and slip it under his door. The next day, you see Jerry and {{girlfriendName}} arguing. She leaves in a huff. Your anonymous note has sewn chaos. Your work is done... until you realize she was going to introduce Jerry to her father, the postmaster general. You may have won the battle, but lost the war.",
      choices: [],
      ending: "won"
  }
};