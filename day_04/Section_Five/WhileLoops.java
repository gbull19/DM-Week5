package Week_05.day_04.Section_Five;

public class WhileLoops {
    public static void main(String[] args) {
        // for (int number = 25; number <= 30; number++ ) {
        //     System.out.println(number);
        // }

        double choice = 0.01;
        double guess = 0.99;

        while (guess > choice) {
            guess = Math.random();
            System.out.println(guess);
        }
    }
}
