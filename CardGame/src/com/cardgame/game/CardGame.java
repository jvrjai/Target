package com.cardgame.game;

import java.util.Scanner;

public class CardGame
{
        public CardGame()
        {

        }

        public static void main(String[] args)
        {
                GameLogic gl = new GameLogic();

                System.out.println("Card Game \nRules of the game: 5 cards will be distributed to each player. The game has 5 rounds.  "
                		+ "			\nIn each round, each player will draw a card. "
                		+ "			\nA player with higher card will win the round and the player who will win maximum rounds will win the game. "
                		+ "			\nPlayer Options");
                System.out.println("1. Start Game \n2. Exit Game");
                System.out.print("Please provide your option : ");

                int i = 1;

                while (i != 0)
                {
                        Scanner in = new Scanner(System.in);
                        i = in.nextInt();

                        switch (i)
                        {
                                case 1:
                                        System.out.println("Provide the Number of Players( should be greater than 1 and less than 4) : ");
                                        in = new Scanner(System.in);
                                        i = in.nextInt();
                                        
                                        gl.playGame(i);
                                        gl.displayWinners();
                                        
                                        break;

                                case 2:
                                        System.exit(0);
                        }

                        System.out.println();
                        System.out.println("Card Game \n Select User Options");
                        System.out.println("1. Start Game \n2. Exit Game");
                        System.out.print("Please provide your option : ");
                }
        }
}
