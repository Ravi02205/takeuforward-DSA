import java.util.Scanner;
public class PatternEight {
    public static void main(String args[]) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int rows= sc.nextInt();
        for(int i=0;i<rows;i++){
            for(int j=0;j<i;j++){
                System.out.print(" ");
            }
            for(int k=rows;k>i;k--){
                System.out.print("*");
            }
            for(int l=rows-1;l>i;l--){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}