WWTBM – Pseudocodes

1. startGameHandler()  
   a. fetch random question and answer options from database.  
   b. put question[id] into a showedQuestions array. If the question[id] already is in showedQuestions, do not show that question. ** Non repetitive questions **

2. clickOptionHandler()  
   a. if the option[id] matches to the correct answer, activate correctOptionHandler.  
   b. Otherwise, activate wrongOptionHandler.

3. correctOptionHandler()  
   a. Check if the step is last, if not, lift one step upward.  
   b. Activate startGameHandler for a new question and options.  
   c. If the step is last, player won a million dollars. Activate gameEndHandler.

4. wrongOptionHandler()  
   a. If is the option is wrong, go to nearest winning step.  
   b. Activate gameEndHandler.

5. quitGameHandler()  
   a. Check if it is the first question. If it is, activate gameEndHandler. Set won amount 0.  
   b. If it is not the first question, set won amount – previous won amount. Activate gameEndHandler.

6. gameEndHandler()  
   a. Fade-out the gaming window.  
   b. Show won amount – Component ‘wonAmount.jxs’.

7. lifeLineHandler()  
   a. Show 3 Lifeline options
