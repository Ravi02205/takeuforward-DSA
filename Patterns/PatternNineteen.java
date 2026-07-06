import java.util.Scanner;
public class PatternNineteen {
    public static void main(String args[]) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int rows= sc.nextInt();
        for(int i=0;i<rows;i++){
            for(int j=rows;j>i;j--){
                System.out.print("*");
            }
            for(int j=2;j<(i+1)*2;j++){
                System.out.print(" ");
            }
            for(int j=rows;j>i;j--){
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=rows-1;i>=0;i--){
            for(int j=rows;j>i;j--){
                System.out.print("*");
            }
            for(int j=2;j<(i+1)*2;j++){
                System.out.print(" ");
            }
            for(int j=rows;j>i;j--){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}