import java.util.*;
public class PatternSeventeen {
    public static void main(String args[]) {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter the number of rows: ");
        int rows = sc.nextInt();
        for(int i=0;i<rows;i++){
            for(int j=rows;j>i+1;j--){
                System.out.print(" ");
            }
            for(int k=0;k<i+1;k++){
                System.out.print((char)(64+k+1));
            }
            for(int k=i+1;k>1;k--){
                System.out.print((char)(64+k-1));
            }
            System.out.println();
        }
    }
}