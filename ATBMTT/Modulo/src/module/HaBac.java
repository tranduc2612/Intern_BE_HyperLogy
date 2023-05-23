package module;
import java.util.Scanner;
public class HaBac {
	public static long nghichDaoEuclid(long b, long m) {
        long A1 = 0, A2 = m;
        long B1 = 1, B2 = b;
        long Q, T1, T2;
        while(B2 != 1 & B2 != 0) {
            Q = A2 / B2;
            T1 = A1 - Q * B1;
            T2 = A2 - Q * B2;

            A1 = B1; A2 = B2;
            B1 = T1; B2 = T2;
        }
        if(B2 == 1) {
            if(B1 < 0) B1 += m;
            return B1;
        }
        return 0; // khong ton tai nghich dao
    }
    public static long haBacLuyThua(long a, long m, long n) {
        System.out.println("= " + a + "^" + m + "\n");

        if(m == 1) return a % n;
        if(m%2 == 0)
            return haBacLuyThua((a*a) % n, m/2, n);
        return (haBacLuyThua((a*a) % n, m/2, n)*a)%n;
    }

    public static void main(String[] args) {
        int a, n, m;
        Scanner sc = new Scanner(System.in);
        System.out.println(nghichDaoEuclid(619, 3583));
        while(true) {
            System.out.println("Nhap so a: ");
            a = sc.nextInt();
            System.out.println("Nhap so m: ");
            m = sc.nextInt();
            System.out.println("Nhap so n: ");
            n = sc.nextInt();
            System.out.println("Ket qua cua phep toan " + a + "^" + m + " mod " + n + " = " + haBacLuyThua(a, m, n));
        }
    }
}
