import java.util.Scanner;
public class PatternNine {
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
            for(int l=1;l<i+1;l++){
                System.out.print("*");
            }
            System.out.println();
        }
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