
import java.util.Scanner;
public class PatternSeven {
    public static void main(String args[]) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int rows= sc.nextInt();
        for(int i=0;i<rows;i++){
            for(int j=rows;j>i+1;j--){
                System.out.print(" ");
            }
            for(int k=0;k<i+1;k++){
                System.out.print("*");
            }
            for(int l=0;l<i+2;l++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}