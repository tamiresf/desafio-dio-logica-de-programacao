import java.util.Locale;
import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) {

        String numero;
        String texto;
        String nomeCliente;
        Double saldo;

        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        System.out.println("Por favor, digite o número da Agência!");
        numero = scanner.next();

        System.out.println("Por favor, digite a Agência!");
        texto = scanner.next();

        System.out.println("Por favor, digite a seu nome!");
        nomeCliente = scanner.next();

        System.out.println("Por favor, digite o saldo!");
        saldo = scanner.nextDouble();

        System.out.println("Olá " + nomeCliente + ", obrigado por criar uma conta em nosso banco, sua agência é " + texto
                + ", conta " + numero + " e seu saldo " + saldo + " já está disponível para saque.");

    }
}
