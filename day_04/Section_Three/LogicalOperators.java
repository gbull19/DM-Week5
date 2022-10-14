public class LogicalOperators {
    public static void main(String [] args) {
        int chemistryGrade = 68;
        int englishGrade = 65;
        String language = "Java";

        if (chemistryGrade > 75 || englishGrade > 75 || language.equals("Java")) {
            System.out.println("Congratulations, you got the scholarship!");
        } else {
            System.out.println("we're sorry, you didn't get the scholarship.");
        }

        int credits = 56;
        double GPA = 1.2;

        if (credits >= 40 && GPA >= 2.0) {
            System.out.println("You earned your diploma!");
        } else {
            System.out.println("Sorry, you need at least 40 credits and a minimuim GPA of 2.0");
        }
    }
}
