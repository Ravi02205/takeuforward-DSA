import java.util.*;
public class PatternThirteen {
    public static void main(String args[]) {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter the number of rows: ");
        int rows = sc.nextInt();
        int count=1;
        for(int i=0;i<rows;i++){
            for(int j=0;j<i+1;j++){
                System.out.print(count+" ");
                count++;
            }
            System.out.println();
        }
    }
}