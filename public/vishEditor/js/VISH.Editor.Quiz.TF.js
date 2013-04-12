/*
 * Ture/False Quiz Module, based on MC module
 * Closure: inherit is not possible, rewrite
 */
VISH.Editor.Quiz.TF = (function(V,$,undefined){
	var choicesLetters = ['a)','b)','c)','d)','e)','f)','g)','h)','i)','j)','k)','l)','m)','n)','o)','p)','q)','r)','s)'];
	var addQuizOptionButtonClass = "add_quiz_option_button_tf";
	var deleteQuizOptionButtonClass = "delete_quiz_option_button_tf";
	var tfCheckbox = "tfCheckbox";
	var initialized = false;

	var init = function(){
		if(!initialized){
			$(document).on('click', '.' + 'mcContainer', _clickOnQuizArea);
			$(document).on('click','.'+ addQuizOptionButtonClass, _clickToAddOptionInQuiz);
			$(document).on('click','.'+ deleteQuizOptionButtonClass, _removeOptionInQuiz);
			$(document).on('click','.'+ tfCheckbox, _onCheckboxClick);
			initialized = true;
		}
	};

	/*
	 * Manage click events
	 */
	var _clickOnQuizArea = function (event) {
		switch (event.target.classList[0]) {
			case "mcContainer":
				V.Editor.setCurrentArea($("#" + event.target.parentElement.id));
				break;
			case "multiplechoice_option_in_zone":
				V.Editor.setCurrentArea($("#" + event.target.parentElement.parentElement.parentElement.parentElement.id));
				break;
			case "li_mch_options_in_zone":
				V.Editor.setCurrentArea($("#" + event.target.parentElement.parentElement.parentElement.id));
				break;
			default:
				break;
		}
	};

	/*
	 * Change checkbox status
	 */
	var _onCheckboxClick = function(event){
		var check = $(event.target).attr("check");
		var column = $(event.target).attr("column");

		switch(column){
			case "true":
				if(check==="true"){
					V.Editor.Quiz.updateCheckbox(event.target,"none");
				} else {
					var falseColumnCheckbox = $("tr").has(event.target).find(".tfCheckbox[column='false']");
					V.Editor.Quiz.updateCheckbox(falseColumnCheckbox,"none");
					V.Editor.Quiz.updateCheckbox(event.target,"true");
				}
				break;
			case "false":
				if(check==="false"){
					V.Editor.Quiz.updateCheckbox(event.target,"none");
				} else {
					var trueColumnCheckbox = $("tr").has(event.target).find(".tfCheckbox[column='true']");
					V.Editor.Quiz.updateCheckbox(trueColumnCheckbox,"none");
					V.Editor.Quiz.updateCheckbox(event.target,"false");
				}
				break;
			default:
				break;
		}
	}

	/*
	 * Create an empty MC Quiz
	 */
	var add = function(area) {
		area.append(_getDummy());
		area.find(".menuselect_hide").remove(); 
		area.attr('type','quiz');
		area.attr('quiztype', V.Constant.QZ_TYPE.TF);
		_launchTextEditorForQuestion(area);
		_addOptionInQuiz(area);
		V.Editor.addDeleteButton(area);
	};

	var _getDummy = function(){
		return "<div class='tfContainer'><div class='value_multiplechoice_question_in_zone'></div><ul class='ul_mch_options_in_zone'></ul><img src='"+V.ImagesPath+ "icons/add.png' class='"+addQuizOptionButtonClass+"'/><input type='hidden' name='quiz_id'/></div></div>";
	}

	var _getOptionDummy = function(){
		return "<li class='li_mch_options_in_zone'><div class='mc_option_wrapper'><span class='quiz_option_index'></span><div class='multiplechoice_option_in_zone'></div><table class='MCchecks'><tr class='checkFirstRow'><td><img src='"+V.ImagesPath+ "icons/ve_delete.png' class='"+deleteQuizOptionButtonClass+"'/></td><td><img src='"+V.ImagesPath+ "quiz/checkbox.jpg' class='"+tfCheckbox+"' column='true' check='none'/></td><td><img src='"+V.ImagesPath+ "quiz/checkbox.jpg' class='"+tfCheckbox+"' column='false' check='none'/></td></tr></table></div></li>";
	}

	/*
	 * AddOptionInQuiz called from click event
	 */
	var _clickToAddOptionInQuiz = function (event) {
		var area = $("#" + event.target.parentElement.parentElement.id);
		V.Editor.setCurrentArea(area);
		_addOptionInQuiz(area);
	}

	var _addOptionInQuiz = function (area,value,check) {
		var nChoices = $(area).find(".li_mch_options_in_zone").size();
		var quiz_option = _getOptionDummy();
		var quiz_option = $(quiz_option).attr("nChoice",(nChoices+1));
		$(area).find(".ul_mch_options_in_zone").append(quiz_option);
		_refreshChoicesIndexs(area);
		if(check==="true"){
			V.Editor.Quiz.updateCheckbox($(quiz_option).find("td > img")[1],check);
		} else if(check==="false"){
			V.Editor.Quiz.updateCheckbox($(quiz_option).find("td > img")[2],check);
		}
		_launchTextEditorForOptions(area, nChoices,value);
		if(nChoices>0) {
			$(area).find("li[nChoice='"+(nChoices+1)+"']").find("."+deleteQuizOptionButtonClass).css("visibility","visible");
		}
	};

	var _removeOptionInQuiz = function (event) {
		var area = $("div[type='quiz']").has(event.target);
		V.Editor.setCurrentArea(area);
		var liToRemove = $("li.li_mch_options_in_zone").has(event.target);
		$(liToRemove).remove();
		_refreshChoicesIndexs(area);
	};

	var _refreshChoicesIndexs = function(area){
		var nChoices = $(area).find(".li_mch_options_in_zone").size(); 
		$(area).find(".li_mch_options_in_zone").each(function(index, option_element) {
			$(option_element).find(".quiz_option_index").text(_getChoiceLetter(nChoices,index+1));
		});
	}

	var _getChoiceLetter = function(nChoices,nChoice){
		if(nChoices<=choicesLetters.length){
			return choicesLetters[nChoice-1];
		} else {
			return ((nChoice)+")");
		}
	}

	var _launchTextEditorForQuestion = function(area,question){
		var textArea = $(area).find(".value_multiplechoice_question_in_zone");
		if(!question){
			V.Editor.Text.launchTextEditor({}, textArea, "", {quiz: true, forceNew: true, fontSize: 38, focus: true, autogrow: true});
		} else {
			V.Editor.Text.launchTextEditor({}, textArea, question, {quiz: true, autogrow: true});
		}
	}

	var _launchTextEditorForOptions = function(area,nChoice,value){
		var first = (nChoice===0);
		var textArea = $(area).find(".multiplechoice_option_in_zone")[nChoice];
		if(!value){
			if(first){
				V.Editor.Text.launchTextEditor({}, textArea, "Write options here", {forceNew: true, fontSize: 24, autogrow: true, placeholder: true});
			} else {
				V.Editor.Text.launchTextEditor({}, textArea, "", {forceNew: true, fontSize: 24, autogrow: true, focus: true});
			}
		}else{
			V.Editor.Text.launchTextEditor({}, textArea, value, {autogrow: true});
		}
	}

	/*
	 * Generate JSON
	 */
	 var save = function(area){
	 	var textArea = $(area).find(".value_multiplechoice_question_in_zone");
	 	var quiz = {};
	 	quiz.quizType = VISH.Constant.QZ_TYPE.TF;
	 	// Self-assessment (Autoevaluación)
	 	quiz.selfA = false; //false by default

	 	var questionInstance = V.Editor.Text.getCKEditorFromTextArea($(area).find(".value_multiplechoice_question_in_zone"));
	 	quiz.question = {};
	 	quiz.question.value = questionInstance.getPlainText();
	 	quiz.question.wysiwygValue = questionInstance.getData();
	 	
	 	quiz.choices = [];

	 	var nChoices = $(area).find(".li_mch_options_in_zone").size();
	 	var optionTextAreas = $(area).find(".multiplechoice_option_in_zone");

	 	for(var i=0; i<nChoices; i++){
	 		var textArea = optionTextAreas[i];
	 		var optionInstance = V.Editor.Text.getCKEditorFromTextArea(textArea);
	 		var choice = {};
	 		choice.value = optionInstance.getPlainText();
	 		choice.wysiwygValue = optionInstance.getData();
	 		var trueColumCheckbox = $(textArea).parent().find(".tfCheckbox[column='true']");
	 		if($(trueColumCheckbox).attr("check")==="true"){
	 			choice.answer = true;
	 			quiz.selfA = true;
	 		} else {
	 			var falseColumCheckbox = $(textArea).parent().find(".tfCheckbox[column='false']");
	 			if($(falseColumCheckbox).attr("check")==="false"){
	 				choice.answer = false;
	 				quiz.selfA = true;
	 			} else {
	 				choice.answer = "?";
	 			}
	 		}
	 		quiz.choices.push(choice);
	 	}

	 	return quiz;
	 }

	/*
	 * Render the quiz in the editor
	 * slide is the area and contains all the required parameters
	 */
	var draw = function(area,quiz){
		//Draw question
		$(area).append(_getDummy());
		$(area).attr('type','quiz');
		$(area).attr('quiztype', VISH.Constant.QZ_TYPE.TF);
		_launchTextEditorForQuestion(area,quiz.question.wysiwygValue);
		V.Editor.addDeleteButton(area);

		//Draw choices (checking selfA)
		$(quiz.choices).each(function(index,choice){
			var check = undefined;
			if(quiz.selfA){
				if(choice.answer===true){
					check = "true";
				} else if(choice.answer===false){
					check = "false";
				}
			}
			_addOptionInQuiz(area,choice.wysiwygValue,check);
		});
	};

	return {
		init			: init, 
		add				: add,
		save			: save,
		draw			: draw
	};

}) (VISH, jQuery);