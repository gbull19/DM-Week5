package Week_05.day_04.Section_Five;

public class BreakAndContinue {
    public static void main(String[] args) {
        for (int i = 0; i <= 10; i++) {
            if ( i % 2 != 0) {
                continue;
            }
            System.out.println(i);
        }
    }
}
