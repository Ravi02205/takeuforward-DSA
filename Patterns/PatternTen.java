import java.util.Scanner;
public class PatternTen {
    public static void main(String args[]) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int rows= sc.nextInt();
        for(int i=0;i<rows;i++){
            
            for(int k=0;k<i+1;k++){
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=1;i<rows;i++){
            for(int k=rows;k>i;k--){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}