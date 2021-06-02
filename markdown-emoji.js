// prettier-ignore
const emoji = [[":grinning:","😀"],[":smiley:","😃"],[":smile:","😄"],[":grin:","😁"],[":laughing:  :satisfied:","😆"],[":sweat_smile:","😅"],[":rofl:","🤣"],[":joy:","😂"],[":slightly_smiling_face:","🙂"],[":upside_down_face:","🙃"],[":wink:","😉"],[":blush:","😊"],[":innocent:","😇"],[":smiling_face_with_three_hearts:","🥰"],[":heart_eyes:","😍"],[":star_struck:","🤩"],[":kissing_heart:","😘"],[":kissing:","😗"],[":relaxed:","☺️"],[":kissing_closed_eyes:","😚"],[":kissing_smiling_eyes:","😙"],[":yum:","😋"],[":stuck_out_tongue:","😛"],[":stuck_out_tongue_winking_eye:","😜"],[":zany_face:","🤪"],[":stuck_out_tongue_closed_eyes:","😝"],[":money_mouth_face:","🤑"],[":hugs:","🤗"],[":hand_over_mouth:","🤭"],[":shushing_face:","🤫"],[":thinking:","🤔"],[":zipper_mouth_face:","🤐"],[":raised_eyebrow:","🤨"],[":neutral_face:","😐"],[":expressionless:","😑"],[":no_mouth:","😶"],[":smirk:","😏"],[":unamused:","😒"],[":roll_eyes:","🙄"],[":grimacing:","😬"],[":lying_face:","🤥"],[":relieved:","😌"],[":pensive:","😔"],[":sleepy:","😪"],[":drooling_face:","🤤"],[":sleeping:","😴"],[":mask:","😷"],[":face_with_thermometer:","🤒"],[":face_with_head_bandage:","🤕"],[":nauseated_face:","🤢"],[":vomiting_face:","🤮"],[":sneezing_face:","🤧"],[":hot_face:","🥵"],[":cold_face:","🥶"],[":woozy_face:","🥴"],[":dizzy_face:","😵"],[":exploding_head:","🤯"],[":cowboy_hat_face:","🤠"],[":partying_face:","🥳"],[":sunglasses:","😎"],[":nerd_face:","🤓"],[":monocle_face:","🧐"],[":confused:","😕"],[":worried:","😟"],[":slightly_frowning_face:","🙁"],[":frowning_face:","☹️"],[":open_mouth:","😮"],[":hushed:","😯"],[":astonished:","😲"],[":flushed:","😳"],[":pleading_face:","🥺"],[":frowning:","😦"],[":anguished:","😧"],[":fearful:","😨"],[":cold_sweat:","😰"],[":disappointed_relieved:","😥"],[":cry:","😢"],[":sob:","😭"],[":scream:","😱"],[":confounded:","😖"],[":persevere:","😣"],[":disappointed:","😞"],[":sweat:","😓"],[":weary:","😩"],[":tired_face:","😫"],[":yawning_face:","🥱"],[":triumph:","😤"],[":pout:  :rage:","😡"],[":angry:","😠"],[":cursing_face:","🤬"],[":smiling_imp:","😈"],[":imp:","👿"],[":skull:","💀"],[":skull_and_crossbones:","☠️"],[":hankey:  :poop:  :shit:","💩"],[":clown_face:","🤡"],[":japanese_ogre:","👹"],[":japanese_goblin:","👺"],[":ghost:","👻"],[":alien:","👽"],[":space_invader:","👾"],[":robot:","🤖"],[":smiley_cat:","😺"],[":smile_cat:","😸"],[":joy_cat:","😹"],[":heart_eyes_cat:","😻"],[":smirk_cat:","😼"],[":kissing_cat:","😽"],[":scream_cat:","🙀"],[":crying_cat_face:","😿"],[":pouting_cat:","😾"],[":see_no_evil:","🙈"],[":hear_no_evil:","🙉"],[":speak_no_evil:","🙊"],[":kiss:","💋"],[":love_letter:","💌"],[":cupid:","💘"],[":gift_heart:","💝"],[":sparkling_heart:","💖"],[":heartpulse:","💗"],[":heartbeat:","💓"],[":revolving_hearts:","💞"],[":two_hearts:","💕"],[":heart_decoration:","💟"],[":heavy_heart_exclamation:","❣️"],[":broken_heart:","💔"],[":heart:","❤️"],[":orange_heart:","🧡"],[":yellow_heart:","💛"],[":green_heart:","💚"],[":blue_heart:","💙"],[":purple_heart:","💜"],[":brown_heart:","🤎"],[":black_heart:","🖤"],[":white_heart:","🤍"],[":100:","💯"],[":anger:","💢"],[":boom:  :collision:","💥"],[":dizzy:","💫"],[":sweat_drops:","💦"],[":dash:","💨"],[":hole:","🕳️"],[":bomb:","💣"],[":speech_balloon:","💬"],[":eye_speech_bubble:","👁️‍🗨️"],[":left_speech_bubble:","🗨️"],[":right_anger_bubble:","🗯️"],[":thought_balloon:","💭"],[":zzz:","💤"],[":wave:","👋"],[":raised_back_of_hand:","🤚"],[":raised_hand_with_fingers_splayed:","🖐️"],[":hand:  :raised_hand:","✋"],[":vulcan_salute:","🖖"],[":ok_hand:","👌"],[":pinching_hand:","🤏"],[":v:","✌️"],[":crossed_fingers:","🤞"],[":love_you_gesture:","🤟"],[":metal:","🤘"],[":call_me_hand:","🤙"],[":point_left:","👈"],[":point_right:","👉"],[":point_up_2:","👆"],[":fu:  :middle_finger:","🖕"],[":point_down:","👇"],[":point_up:","☝️"],[":+1:  :thumbsup:","👍"],[":-1:  :thumbsdown:","👎"],[":fist:  :fist_raised:","✊"],[":facepunch:  :fist_oncoming:  :punch:","👊"],[":fist_left:","🤛"],[":fist_right:","🤜"],[":clap:","👏"],[":raised_hands:","🙌"],[":open_hands:","👐"],[":palms_up_together:","🤲"],[":handshake:","🤝"],[":pray:","🙏"],[":writing_hand:","✍️"],[":nail_care:","💅"],[":selfie:","🤳"],[":muscle:","💪"],[":mechanical_arm:","🦾"],[":mechanical_leg:","🦿"],[":leg:","🦵"],[":foot:","🦶"],[":ear:","👂"],[":ear_with_hearing_aid:","🦻"],[":nose:","👃"],[":brain:","🧠"],[":tooth:","🦷"],[":bone:","🦴"],[":eyes:","👀"],[":eye:","👁️"],[":tongue:","👅"],[":lips:","👄"],[":baby:","👶"],[":child:","🧒"],[":boy:","👦"],[":girl:","👧"],[":adult:","🧑"],[":blond_haired_person:","👱"],[":man:","👨"],[":bearded_person:","🧔"],[":red_haired_man:","👨‍🦰"],[":curly_haired_man:","👨‍🦱"],[":white_haired_man:","👨‍🦳"],[":bald_man:","👨‍🦲"],[":woman:","👩"],[":red_haired_woman:","👩‍🦰"],[":person_red_hair:","🧑‍🦰"],[":curly_haired_woman:","👩‍🦱"],[":person_curly_hair:","🧑‍🦱"],[":white_haired_woman:","👩‍🦳"],[":person_white_hair:","🧑‍🦳"],[":bald_woman:","👩‍🦲"],[":person_bald:","🧑‍🦲"],[":blond_haired_woman:  :blonde_woman:","👱‍♀️"],[":blond_haired_man:","👱‍♂️"],[":older_adult:","🧓"],[":older_man:","👴"],[":older_woman:","👵"],[":frowning_person:","🙍"],[":frowning_man:","🙍‍♂️"],[":frowning_woman:","🙍‍♀️"],[":pouting_face:","🙎"],[":pouting_man:","🙎‍♂️"],[":pouting_woman:","🙎‍♀️"],[":no_good:","🙅"],[":ng_man:  :no_good_man:","🙅‍♂️"],[":ng_woman:  :no_good_woman:","🙅‍♀️"],[":ok_person:","🙆"],[":ok_man:","🙆‍♂️"],[":ok_woman:","🙆‍♀️"],[":information_desk_person:  :tipping_hand_person:","💁"],[":sassy_man:  :tipping_hand_man:","💁‍♂️"],[":sassy_woman:  :tipping_hand_woman:","💁‍♀️"],[":raising_hand:","🙋"],[":raising_hand_man:","🙋‍♂️"],[":raising_hand_woman:","🙋‍♀️"],[":deaf_person:","🧏"],[":deaf_man:","🧏‍♂️"],[":deaf_woman:","🧏‍♀️"],[":bow:","🙇"],[":bowing_man:","🙇‍♂️"],[":bowing_woman:","🙇‍♀️"],[":facepalm:","🤦"],[":man_facepalming:","🤦‍♂️"],[":woman_facepalming:","🤦‍♀️"],[":shrug:","🤷"],[":man_shrugging:","🤷‍♂️"],[":woman_shrugging:","🤷‍♀️"],[":health_worker:","🧑‍⚕️"],[":man_health_worker:","👨‍⚕️"],[":woman_health_worker:","👩‍⚕️"],[":student:","🧑‍🎓"],[":man_student:","👨‍🎓"],[":woman_student:","👩‍🎓"],[":teacher:","🧑‍🏫"],[":man_teacher:","👨‍🏫"],[":woman_teacher:","👩‍🏫"],[":judge:","🧑‍⚖️"],[":man_judge:","👨‍⚖️"],[":woman_judge:","👩‍⚖️"],[":farmer:","🧑‍🌾"],[":man_farmer:","👨‍🌾"],[":woman_farmer:","👩‍🌾"],[":cook:","🧑‍🍳"],[":man_cook:","👨‍🍳"],[":woman_cook:","👩‍🍳"],[":mechanic:","🧑‍🔧"],[":man_mechanic:","👨‍🔧"],[":woman_mechanic:","👩‍🔧"],[":factory_worker:","🧑‍🏭"],[":man_factory_worker:","👨‍🏭"],[":woman_factory_worker:","👩‍🏭"],[":office_worker:","🧑‍💼"],[":man_office_worker:","👨‍💼"],[":woman_office_worker:","👩‍💼"],[":scientist:","🧑‍🔬"],[":man_scientist:","👨‍🔬"],[":woman_scientist:","👩‍🔬"],[":technologist:","🧑‍💻"],[":man_technologist:","👨‍💻"],[":woman_technologist:","👩‍💻"],[":singer:","🧑‍🎤"],[":man_singer:","👨‍🎤"],[":woman_singer:","👩‍🎤"],[":artist:","🧑‍🎨"],[":man_artist:","👨‍🎨"],[":woman_artist:","👩‍🎨"],[":pilot:","🧑‍✈️"],[":man_pilot:","👨‍✈️"],[":woman_pilot:","👩‍✈️"],[":astronaut:","🧑‍🚀"],[":man_astronaut:","👨‍🚀"],[":woman_astronaut:","👩‍🚀"],[":firefighter:","🧑‍🚒"],[":man_firefighter:","👨‍🚒"],[":woman_firefighter:","👩‍🚒"],[":cop:  :police_officer:","👮"],[":policeman:","👮‍♂️"],[":policewoman:","👮‍♀️"],[":detective:","🕵️"],[":male_detective:","🕵️‍♂️"],[":female_detective:","🕵️‍♀️"],[":guard:","💂"],[":guardsman:","💂‍♂️"],[":guardswoman:","💂‍♀️"],[":construction_worker:","👷"],[":construction_worker_man:","👷‍♂️"],[":construction_worker_woman:","👷‍♀️"],[":prince:","🤴"],[":princess:","👸"],[":person_with_turban:","👳"],[":man_with_turban:","👳‍♂️"],[":woman_with_turban:","👳‍♀️"],[":man_with_gua_pi_mao:","👲"],[":woman_with_headscarf:","🧕"],[":man_in_tuxedo:","🤵"],[":bride_with_veil:","👰"],[":pregnant_woman:","🤰"],[":breast_feeding:","🤱"],[":angel:","👼"],[":santa:","🎅"],[":mrs_claus:","🤶"],[":superhero:","🦸"],[":superhero_man:","🦸‍♂️"],[":superhero_woman:","🦸‍♀️"],[":supervillain:","🦹"],[":supervillain_man:","🦹‍♂️"],[":supervillain_woman:","🦹‍♀️"],[":mage:","🧙"],[":mage_man:","🧙‍♂️"],[":mage_woman:","🧙‍♀️"],[":fairy:","🧚"],[":fairy_man:","🧚‍♂️"],[":fairy_woman:","🧚‍♀️"],[":vampire:","🧛"],[":vampire_man:","🧛‍♂️"],[":vampire_woman:","🧛‍♀️"],[":merperson:","🧜"],[":merman:","🧜‍♂️"],[":mermaid:","🧜‍♀️"],[":elf:","🧝"],[":elf_man:","🧝‍♂️"],[":elf_woman:","🧝‍♀️"],[":genie:","🧞"],[":genie_man:","🧞‍♂️"],[":genie_woman:","🧞‍♀️"],[":zombie:","🧟"],[":zombie_man:","🧟‍♂️"],[":zombie_woman:","🧟‍♀️"],[":massage:","💆"],[":massage_man:","💆‍♂️"],[":massage_woman:","💆‍♀️"],[":haircut:","💇"],[":haircut_man:","💇‍♂️"],[":haircut_woman:","💇‍♀️"],[":walking:","🚶"],[":walking_man:","🚶‍♂️"],[":walking_woman:","🚶‍♀️"],[":standing_person:","🧍"],[":standing_man:","🧍‍♂️"],[":standing_woman:","🧍‍♀️"],[":kneeling_person:","🧎"],[":kneeling_man:","🧎‍♂️"],[":kneeling_woman:","🧎‍♀️"],[":person_with_probing_cane:","🧑‍🦯"],[":man_with_probing_cane:","👨‍🦯"],[":woman_with_probing_cane:","👩‍🦯"],[":person_in_motorized_wheelchair:","🧑‍🦼"],[":man_in_motorized_wheelchair:","👨‍🦼"],[":woman_in_motorized_wheelchair:","👩‍🦼"],[":person_in_manual_wheelchair:","🧑‍🦽"],[":man_in_manual_wheelchair:","👨‍🦽"],[":woman_in_manual_wheelchair:","👩‍🦽"],[":runner:  :running:","🏃"],[":running_man:","🏃‍♂️"],[":running_woman:","🏃‍♀️"],[":dancer:  :woman_dancing:","💃"],[":man_dancing:","🕺"],[":business_suit_levitating:","🕴️"],[":dancers:","👯"],[":dancing_men:","👯‍♂️"],[":dancing_women:","👯‍♀️"],[":sauna_person:","🧖"],[":sauna_man:","🧖‍♂️"],[":sauna_woman:","🧖‍♀️"],[":climbing:","🧗"],[":climbing_man:","🧗‍♂️"],[":climbing_woman:","🧗‍♀️"],[":person_fencing:","🤺"],[":horse_racing:","🏇"],[":skier:","⛷️"],[":snowboarder:","🏂"],[":golfing:","🏌️"],[":golfing_man:","🏌️‍♂️"],[":golfing_woman:","🏌️‍♀️"],[":surfer:","🏄"],[":surfing_man:","🏄‍♂️"],[":surfing_woman:","🏄‍♀️"],[":rowboat:","🚣"],[":rowing_man:","🚣‍♂️"],[":rowing_woman:","🚣‍♀️"],[":swimmer:","🏊"],[":swimming_man:","🏊‍♂️"],[":swimming_woman:","🏊‍♀️"],[":bouncing_ball_person:","⛹️"],[":basketball_man:  :bouncing_ball_man:","⛹️‍♂️"],[":basketball_woman:  :bouncing_ball_woman:","⛹️‍♀️"],[":weight_lifting:","🏋️"],[":weight_lifting_man:","🏋️‍♂️"],[":weight_lifting_woman:","🏋️‍♀️"],[":bicyclist:","🚴"],[":biking_man:","🚴‍♂️"],[":biking_woman:","🚴‍♀️"],[":mountain_bicyclist:","🚵"],[":mountain_biking_man:","🚵‍♂️"],[":mountain_biking_woman:","🚵‍♀️"],[":cartwheeling:","🤸"],[":man_cartwheeling:","🤸‍♂️"],[":woman_cartwheeling:","🤸‍♀️"],[":wrestling:","🤼"],[":men_wrestling:","🤼‍♂️"],[":women_wrestling:","🤼‍♀️"],[":water_polo:","🤽"],[":man_playing_water_polo:","🤽‍♂️"],[":woman_playing_water_polo:","🤽‍♀️"],[":handball_person:","🤾"],[":man_playing_handball:","🤾‍♂️"],[":woman_playing_handball:","🤾‍♀️"],[":juggling_person:","🤹"],[":man_juggling:","🤹‍♂️"],[":woman_juggling:","🤹‍♀️"],[":lotus_position:","🧘"],[":lotus_position_man:","🧘‍♂️"],[":lotus_position_woman:","🧘‍♀️"],[":bath:","🛀"],[":sleeping_bed:","🛌"],[":people_holding_hands:","🧑‍🤝‍🧑"],[":two_women_holding_hands:","👭"],[":couple:","👫"],[":two_men_holding_hands:","👬"],[":couplekiss:","💏"],[":couplekiss_man_woman:","👩‍❤️‍💋‍👨"],[":couplekiss_man_man:","👨‍❤️‍💋‍👨"],[":couplekiss_woman_woman:","👩‍❤️‍💋‍👩"],[":couple_with_heart:","💑"],[":couple_with_heart_woman_man:","👩‍❤️‍👨"],[":couple_with_heart_man_man:","👨‍❤️‍👨"],[":couple_with_heart_woman_woman:","👩‍❤️‍👩"],[":family:","👪"],[":family_man_woman_boy:","👨‍👩‍👦"],[":family_man_woman_girl:","👨‍👩‍👧"],[":family_man_woman_girl_boy:","👨‍👩‍👧‍👦"],[":family_man_woman_boy_boy:","👨‍👩‍👦‍👦"],[":family_man_woman_girl_girl:","👨‍👩‍👧‍👧"],[":family_man_man_boy:","👨‍👨‍👦"],[":family_man_man_girl:","👨‍👨‍👧"],[":family_man_man_girl_boy:","👨‍👨‍👧‍👦"],[":family_man_man_boy_boy:","👨‍👨‍👦‍👦"],[":family_man_man_girl_girl:","👨‍👨‍👧‍👧"],[":family_woman_woman_boy:","👩‍👩‍👦"],[":family_woman_woman_girl:","👩‍👩‍👧"],[":family_woman_woman_girl_boy:","👩‍👩‍👧‍👦"],[":family_woman_woman_boy_boy:","👩‍👩‍👦‍👦"],[":family_woman_woman_girl_girl:","👩‍👩‍👧‍👧"],[":family_man_boy:","👨‍👦"],[":family_man_boy_boy:","👨‍👦‍👦"],[":family_man_girl:","👨‍👧"],[":family_man_girl_boy:","👨‍👧‍👦"],[":family_man_girl_girl:","👨‍👧‍👧"],[":family_woman_boy:","👩‍👦"],[":family_woman_boy_boy:","👩‍👦‍👦"],[":family_woman_girl:","👩‍👧"],[":family_woman_girl_boy:","👩‍👧‍👦"],[":family_woman_girl_girl:","👩‍👧‍👧"],[":speaking_head:","🗣️"],[":bust_in_silhouette:","👤"],[":busts_in_silhouette:","👥"],[":footprints:","👣"],[":monkey_face:","🐵"],[":monkey:","🐒"],[":gorilla:","🦍"],[":orangutan:","🦧"],[":dog:","🐶"],[":dog2:","🐕"],[":guide_dog:","🦮"],[":service_dog:","🐕‍🦺"],[":poodle:","🐩"],[":wolf:","🐺"],[":fox_face:","🦊"],[":raccoon:","🦝"],[":cat:","🐱"],[":cat2:","🐈"],[":lion:","🦁"],[":tiger:","🐯"],[":tiger2:","🐅"],[":leopard:","🐆"],[":horse:","🐴"],[":racehorse:","🐎"],[":unicorn:","🦄"],[":zebra:","🦓"],[":deer:","🦌"],[":cow:","🐮"],[":ox:","🐂"],[":water_buffalo:","🐃"],[":cow2:","🐄"],[":pig:","🐷"],[":pig2:","🐖"],[":boar:","🐗"],[":pig_nose:","🐽"],[":ram:","🐏"],[":sheep:","🐑"],[":goat:","🐐"],[":dromedary_camel:","🐪"],[":camel:","🐫"],[":llama:","🦙"],[":giraffe:","🦒"],[":elephant:","🐘"],[":rhinoceros:","🦏"],[":hippopotamus:","🦛"],[":mouse:","🐭"],[":mouse2:","🐁"],[":rat:","🐀"],[":hamster:","🐹"],[":rabbit:","🐰"],[":rabbit2:","🐇"],[":chipmunk:","🐿️"],[":hedgehog:","🦔"],[":bat:","🦇"],[":bear:","🐻"],[":koala:","🐨"],[":panda_face:","🐼"],[":sloth:","🦥"],[":otter:","🦦"],[":skunk:","🦨"],[":kangaroo:","🦘"],[":badger:","🦡"],[":feet:  :paw_prints:","🐾"],[":turkey:","🦃"],[":chicken:","🐔"],[":rooster:","🐓"],[":hatching_chick:","🐣"],[":baby_chick:","🐤"],[":hatched_chick:","🐥"],[":bird:","🐦"],[":penguin:","🐧"],[":dove:","🕊️"],[":eagle:","🦅"],[":duck:","🦆"],[":swan:","🦢"],[":owl:","🦉"],[":flamingo:","🦩"],[":peacock:","🦚"],[":parrot:","🦜"],[":frog:","🐸"],[":crocodile:","🐊"],[":turtle:","🐢"],[":lizard:","🦎"],[":snake:","🐍"],[":dragon_face:","🐲"],[":dragon:","🐉"],[":sauropod:","🦕"],[":t-rex:","🦖"],[":whale:","🐳"],[":whale2:","🐋"],[":dolphin:  :flipper:","🐬"],[":fish:","🐟"],[":tropical_fish:","🐠"],[":blowfish:","🐡"],[":shark:","🦈"],[":octopus:","🐙"],[":shell:","🐚"],[":snail:","🐌"],[":butterfly:","🦋"],[":bug:","🐛"],[":ant:","🐜"],[":bee:  :honeybee:","🐝"],[":beetle:","🐞"],[":cricket:","🦗"],[":spider:","🕷️"],[":spider_web:","🕸️"],[":scorpion:","🦂"],[":mosquito:","🦟"],[":microbe:","🦠"],[":bouquet:","💐"],[":cherry_blossom:","🌸"],[":white_flower:","💮"],[":rosette:","🏵️"],[":rose:","🌹"],[":wilted_flower:","🥀"],[":hibiscus:","🌺"],[":sunflower:","🌻"],[":blossom:","🌼"],[":tulip:","🌷"],[":seedling:","🌱"],[":evergreen_tree:","🌲"],[":deciduous_tree:","🌳"],[":palm_tree:","🌴"],[":cactus:","🌵"],[":ear_of_rice:","🌾"],[":herb:","🌿"],[":shamrock:","☘️"],[":four_leaf_clover:","🍀"],[":maple_leaf:","🍁"],[":fallen_leaf:","🍂"],[":leaves:","🍃"],[":grapes:","🍇"],[":melon:","🍈"],[":watermelon:","🍉"],[":mandarin:  :orange:  :tangerine:","🍊"],[":lemon:","🍋"],[":banana:","🍌"],[":pineapple:","🍍"],[":mango:","🥭"],[":apple:","🍎"],[":green_apple:","🍏"],[":pear:","🍐"],[":peach:","🍑"],[":cherries:","🍒"],[":strawberry:","🍓"],[":kiwi_fruit:","🥝"],[":tomato:","🍅"],[":coconut:","🥥"],[":avocado:","🥑"],[":eggplant:","🍆"],[":potato:","🥔"],[":carrot:","🥕"],[":corn:","🌽"],[":hot_pepper:","🌶️"],[":cucumber:","🥒"],[":leafy_green:","🥬"],[":broccoli:","🥦"],[":garlic:","🧄"],[":onion:","🧅"],[":mushroom:","🍄"],[":peanuts:","🥜"],[":chestnut:","🌰"],[":bread:","🍞"],[":croissant:","🥐"],[":baguette_bread:","🥖"],[":pretzel:","🥨"],[":bagel:","🥯"],[":pancakes:","🥞"],[":waffle:","🧇"],[":cheese:","🧀"],[":meat_on_bone:","🍖"],[":poultry_leg:","🍗"],[":cut_of_meat:","🥩"],[":bacon:","🥓"],[":hamburger:","🍔"],[":fries:","🍟"],[":pizza:","🍕"],[":hotdog:","🌭"],[":sandwich:","🥪"],[":taco:","🌮"],[":burrito:","🌯"],[":stuffed_flatbread:","🥙"],[":falafel:","🧆"],[":egg:","🥚"],[":fried_egg:","🍳"],[":shallow_pan_of_food:","🥘"],[":stew:","🍲"],[":bowl_with_spoon:","🥣"],[":green_salad:","🥗"],[":popcorn:","🍿"],[":butter:","🧈"],[":salt:","🧂"],[":canned_food:","🥫"],[":bento:","🍱"],[":rice_cracker:","🍘"],[":rice_ball:","🍙"],[":rice:","🍚"],[":curry:","🍛"],[":ramen:","🍜"],[":spaghetti:","🍝"],[":sweet_potato:","🍠"],[":oden:","🍢"],[":sushi:","🍣"],[":fried_shrimp:","🍤"],[":fish_cake:","🍥"],[":moon_cake:","🥮"],[":dango:","🍡"],[":dumpling:","🥟"],[":fortune_cookie:","🥠"],[":takeout_box:","🥡"],];

const SELECT_EMOJI_ID = "emoji-options";

function addStyle(styleString) {
  const style = document.createElement("style");
  style.textContent = styleString;
  document.head.append(style);
}

function getSuggesion(text) {
  return emoji.filter((e) => e[0].indexOf(text) != -1);
}

function removeHoverClass(element) {
  element.childNodes.forEach((e) => {
    e.className = "";
  });
}

function startMarkdownEmojiOnId(id) {
  const element = document.getElementById(id);
  if (element)
    element.oninput = (e) => {
      removeExistingElement();
      const words = e.target.value.split(" ");
      const text = words[words.length - 1];
      if (text.startsWith(":") && text.length > 3) {
        const suggestions = getSuggesion(text.substr(1));
        displaySuggestions(suggestions, element);
      }
    };
}

function removeExistingElement() {
  document.getElementById("emoji-options") &&
    document.getElementById("emoji-options").remove();
}

function createOption(emoji, name) {
  const option = document.createElement("div");
  option.innerHTML = `${emoji}`;
  option.style.display = "inline-block";
  option.style.cursor = "pointer";
  return option;
}

function createSelectElement(element) {
  const div = document.createElement("div");
  div.setAttribute("id", SELECT_EMOJI_ID);
  div.style.display = "inline-block";
  div.style.verticalAlign = "top";
  div.style.width = `${element.offsetWidth - 10}px`;

  const select = document.createElement("div");
  select.style.position = "absolute";
  select.style.appearance = "none";
  select.style.backgroundColor = "transparent";
  select.style.border = 0;
  select.style.padding = "5px";
  select.style.height = "2.5rem";
  select.style.width = "inherit";
  select.style.overflowX = "auto";
  select.style.overflowY = "hidden";

  div.appendChild(select);
  document.getElementsByTagName("body").item(0).appendChild(div);
  return select;
}

function selectEmoji(emoji, element) {
  const words = element.value.split(" ");
  words.pop();
  words.push(emoji);
  element.value = words.join(" ");
  removeExistingElement();
}

function shiftHoverClass(select, key) {
  const options = select.children;
  for (let i = 0; i < options.length; i++) {
    if (options[i].className === "hover") {
      options[i].className = "";
      if (key == 39) options[(i + 1) % options.length].className = "hover";
      else {
        options[
          (i > 0 ? i - 1 : options.length - 1) % options.length
        ].className = "hover";
      }
      break;
    }
  }
}

function addEmoji(select, element) {
  const options = select.children;
  for (let i = 0; i < options.length; i++) {
    if (options[i].className === "hover") {
      selectEmoji(options[i].innerHTML, element);
    }
  }
}

function displaySuggestions(suggestions, element) {
  const select = createSelectElement(element);

  let count = 0;
  suggestions.forEach((e) => {
    count++;
    const option = createOption(e[1], e[0]);
    option.onclick = () => selectEmoji(option.innerHTML, element);
    if (count == 1) option.className = "hover";
    select.appendChild(option);
  });
  select.size = count;

  element.onkeydown = (e) => {
    if (e.keyCode == 13) {
      e.stopPropagation();
      e.preventDefault();
      addEmoji(select, element);
    } else if (e.keyCode == 37 || e.keyCode == 39) {
      e.stopPropagation();
      e.preventDefault();
      shiftHoverClass(select, e.keyCode);
    }
  };
}

addStyle(`
  #${SELECT_EMOJI_ID} div::-webkit-scrollbar {
    height: 3px;
  }
  #${SELECT_EMOJI_ID} div::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  #${SELECT_EMOJI_ID} div::-webkit-scrollbar-thumb {
    background: grey; 
    border-radius: 2px;
  }
  #${SELECT_EMOJI_ID} div::-webkit-scrollbar-thumb:hover {
    background: lightgrey; 
  }
  #${SELECT_EMOJI_ID} div *{
    border-radius: 5px;
    background-color: transparent;
  }
  #${SELECT_EMOJI_ID} div .hover{
    border: 1px solid red;
  }
  #${SELECT_EMOJI_ID} div{
    font-size: 1.5rem;
  }
`);
