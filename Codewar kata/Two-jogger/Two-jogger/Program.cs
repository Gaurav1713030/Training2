using System;

namespace Two_jogger
{
    class Program
    {


    public static int gcd(int a, int b)
    {
      if (a == 0)
        return b;
      return gcd(b % a, a);
    }
    public static int lcm(int a, int b)
    {

      return (a / gcd(a, b)) * b;
      //Console.WriteLine(sum2);
    }
    static void Main(string[] args)
        {
               int a = 4;
                int b = 6;
             int c = lcm(a, b);
      Console.WriteLine(c / a);
      Console.WriteLine(c / b);

        }
    }
}
