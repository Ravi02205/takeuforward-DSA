import java.util.*;
public class PatternTwelve {
    public static void main(String args[]) {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter the number of rows: ");
        int rows = sc.nextInt();
        for(int i=0;i<rows;i++){
            for(int j=0;j<i+1;j++){
                System.out.print(j+1+" ");
            }
            for(int k=rows+1;k>i+2;k--){
                System.out.print("  ");
            }
            for(int l=rows+1;l>i+2;l--){
                System.out.print("  ");
            }
            for(int m=i+1;m>0;m--){
                System.out.print(m+" ");
            }
            System.out.println();
        }
    }
}