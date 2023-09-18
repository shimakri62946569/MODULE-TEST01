// Displaying pc score
let pc_score = document.querySelector(".pc-score");
let local_storage_pc_value = localStorage.getItem("pc-score");
if (local_storage_pc_value == null) {
  localStorage.setItem("pc-score", 0);
} else {
  pc_score.value = local_storage_pc_value;
}

// Displaying user score
let user_score = document.querySelector(".user-score");
let local_storage_user_value = localStorage.getItem("user-score");
if (local_storage_user_value == null) {
  localStorage.setItem("user-score", 0);
} else {
  user_score.value = local_storage_user_value;
}

// stop next button
function stop_next_button(){
  let next_btn = document.querySelector(".next");
  next_btn.style.display = "none";
}

// stop result show game (result-play-again)
function stop_result_show_game() {
  let result = document.querySelector(".result");
  result.style.display = "none";
  let game = document.querySelector(".game");
  game.style.display = "block";
  stop_next_button();
}

// show main and header
function show_main_and_header(){
  let header = document.querySelector("header");
  header.style.display = "flex";
  let main = document.querySelector("main");
  main.style.display = "flex";
}

// stop main and header
function stop_main_and_header(){
  let main = document.querySelector("main");
  main.style.display = "none";
  let header = document.querySelector("header");
  header.style.display = "none";
}

// hurray play again button code
function hurray_play_again() {
  show_main_and_header();
  stop_result_show_game();
  stop_next_button();
  let hurray = document.querySelector(".hurray-message");
  hurray.style.display = "none";
  let white_box = document.querySelector(".white-box");
  white_box.style.display = "flex";
}

// show hurray message code
function show_hurray() {
  stop_main_and_header();
  let white_box = document.querySelector(".white-box");
  white_box.style.display = "none";
  let game = document.querySelector(".game");
  game.style.display = "none";
  let hurray = document.querySelector(".hurray-message");
  hurray.style.display = "flex";
}

// stopping all background circle for user
function stop_all_user_circle(){
  let user_circle_1 = document.querySelector(".user-circle-1");
  user_circle_1.style.visibility = "hidden";
  let user_circle_2 = document.querySelector(".user-circle-2");
  user_circle_2.style.visibility = "hidden";
  let user_circle_3 = document.querySelector(".user-circle-3");
  user_circle_3.style.visibility = "hidden";
}

// displaying all background circle for user
function show_all_user_circle(){
  let user_circle_1 = document.querySelector(".user-circle-1");
  user_circle_1.style.visibility = "visible";
  let user_circle_2 = document.querySelector(".user-circle-2");
  user_circle_2.style.visibility = "visible";
  let user_circle_3 = document.querySelector(".user-circle-3");
  user_circle_3.style.visibility = "visible";
}

// stopping all background circle for pc
function stop_all_pc_circle(){
  let pc_circle_1 = document.querySelector(".pc-circle-1");
  pc_circle_1.style.visibility = "hidden";
  let pc_circle_2 = document.querySelector(".pc-circle-2");
  pc_circle_2.style.visibility = "hidden";
  let pc_circle_3 = document.querySelector(".pc-circle-3");
  pc_circle_3.style.visibility = "hidden";
}

// displaying all background circle for pc
function show_all_pc_circle(){
  let pc_circle_1 = document.querySelector(".pc-circle-1");
  pc_circle_1.style.visibility = "visible";
  let pc_circle_2 = document.querySelector(".pc-circle-2");
  pc_circle_2.style.visibility = "visible";
  let pc_circle_3 = document.querySelector(".pc-circle-3");
  pc_circle_3.style.visibility = "visible";
}

// stopping game and showing result
function stop_game_show_result(){
  let game = document.querySelector(".game");
  game.style.display = "none";
  let result = document.querySelector(".result");
  result.style.display = "flex";
}

// Code for TieUP
function show_tieUp(element_name, element_color, msg) {
  stop_all_user_circle();
  stop_all_pc_circle();
  stop_game_show_result();
  stop_next_button();
  let user = document.querySelector(".user");
  user.style.border = `15px solid ${element_color}`;
  let computer = document.querySelector(".pc");
  computer.style.border = `15px solid ${element_color}`;
  let user_image = document.querySelector("#user-image");
  user_image.src = `resources/${element_name}.png`;
  let computer_image = document.querySelector("#pc-image");
  computer_image.src = `resources/${element_name}.png`;
  let message1 = document.querySelector('.message-1')
  message1.textContent = `${msg}`
  let message2 = document.querySelector('.message-2')
  message2.textContent = " "
}

// setting user button and image after winning 
function set_user_btn_and_img(user_element_name, user_btn_color){
  let user = document.querySelector(".user");
  user.style.border = `15px solid ${user_btn_color}`;
  let user_image = document.querySelector("#user-image");
  user_image.src = `resources/${user_element_name}.png`;
}

// setting pc button and image after winning
function set_pc_btn_and_img(pc_element_name, pc_btn_color){
  let computer = document.querySelector(".pc");
  computer.style.border = `15px solid ${pc_btn_color}`;
  let computer_image = document.querySelector("#pc-image");
  computer_image.src = `resources/${pc_element_name}.png`;
}

// displaying message after winning or loosing
function display_message(msg, msg2){
  let message1 = document.querySelector('.message-1')
  message1.textContent = `${msg}`
  let message2 = document.querySelector(".message-2")
  message2.textContent = `${msg2}`
}

// code for user after winning
function show_result_for_user(
  user_btn_color,
  user_element_name,
  pc_btn_color,
  pc_element_name,
  msg,
  msg2
) {
  stop_game_show_result();
  show_all_user_circle();
  stop_all_pc_circle();
  set_user_btn_and_img(user_element_name, user_btn_color);
  set_pc_btn_and_img(pc_element_name, pc_btn_color);
  let next_btn = document.querySelector(".next");
  next_btn.style.display = "flex";
  display_message(msg, msg2);
  return 1;
}

// code for pc after winning
function show_result_for_pc(
  pc_btn_color,
  pc_element_name,
  user_btn_color,
  user_element_name,
  msg,
  msg2
) {
  stop_game_show_result();
  stop_all_user_circle();
  show_all_pc_circle();
  stop_next_button();
  set_pc_btn_and_img(pc_element_name, pc_btn_color);
  set_user_btn_and_img(user_element_name, user_btn_color);
  display_message(msg, msg2);
  return 1;
}

// displaying rules with animation
function show_rules() {
  let rules = document.querySelector(".instruction");
  let close = document.querySelector(".close");
  rules.style.display = "flex";
  rules.style.animationName = "popup";
  rules.style.animationDuration = "0.5s";
  close.style.display = "flex";
  close.style.animationName = "popup";
  close.style.animationDuration = "0.5s";
}

// code for closing rules
function close_popup() {
  let rules = document.querySelector(".instruction");
  let close = document.querySelector(".close");
  rules.style.display = "none";
  close.style.display = "none";
}

// getting random element
function get_random_element(){
  let element = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * element.length);
  return element[randomIndex];
}

// setting pc score
function set_pc_score(final_value){
  localStorage.setItem("pc-score", final_value);
  let local_storage_value = localStorage.getItem("pc-score");
  pc_score.value = local_storage_value;
}

// setting user score
function set_user_score(final_value){
    localStorage.setItem("user-score", final_value);
    let local_storage_value = localStorage.getItem("user-score");
    user_score.value = local_storage_value;
}

// code for ROCK
function rock() {
  let computerChoice = get_random_element();
  // let computerChoice = "scissor"
  if (computerChoice === "rock") {
    show_tieUp("rock", "#0074B6", "TIE UP");
    return;
  } else if (computerChoice === "paper") {
    let point = show_result_for_pc(
      "#ffa943",
      "paper",
      "#0074b6",
      "rock",
      "YOU LOST",
      "AGAINST PC"
    );
    let pc_score = document.querySelector(".pc-score");
    let final_value = parseInt(pc_score.value) + point;
    set_pc_score(final_value);

  } else {
    let point = show_result_for_user(
      "#0074B6",
      "rock",
      "#bd00ff",
      "scissor",
      "YOU WIN",
      "AGAINST PC"
    );
    let user_score = document.querySelector(".user-score");
    let final_value = parseInt(user_score.value) + point;
    set_user_score(final_value);
  }
}

// code for PAPER
function paper() {
  let computerChoice = get_random_element()
  if (computerChoice === "paper") {
    show_tieUp("paper", "#ffa943", "TIE UP");
    return;
  } else if (computerChoice === "rock") {
    let point = show_result_for_user(
      "#ffa943",
      "paper",
      "#0074b6",
      "rock",
      "YOU WIN",
      "AGAINST PC"
    );
    let user_score = document.querySelector(".user-score");
    let final_value = parseInt(user_score.value) + point;
    set_user_score(final_value);
  } else {
    let point = show_result_for_pc(
      "#bd00ff",
      "scissor",
      "#ffa943",
      "paper",
      "YOU LOST",
      "AGAINST PC"
    );
    let pc_score = document.querySelector(".pc-score");
    let final_value = parseInt(pc_score.value) + point;
    set_pc_score(final_value);
  }
}

// code for SCISSOR
function scissor() {
  let computerChoice = get_random_element();
  if (computerChoice === "scissor") {
    show_tieUp("scissor", "#bd00ff", "TIE UP");
    return;
  } else if (computerChoice === "rock") {
    let point = show_result_for_pc(
      "#0074b6",
      "rock",
      "#bd00ff",
      "scissor",
      "YOU LOST",
      "AGAINST PC"
    );
    let pc_score = document.querySelector(".pc-score");
    let final_value = parseInt(pc_score.value) + point;
    set_pc_score(final_value);
  } else {
    let point = show_result_for_user(
      "#bd00ff",
      "scissor",
      "#ffa943",
      "paper",
      "YOU WIN",
      "AGAINST PC"
    );
    let user_score = document.querySelector(".user-score");
    let final_value = parseInt(user_score.value) + point;
    set_user_score(final_value);
  }
}
