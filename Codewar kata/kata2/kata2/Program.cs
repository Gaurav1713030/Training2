using System;
using System.Collections.Generic;
namespace kata2
{
    class Program
    {
       public static int sum { get; set; }
       public static int sum2 { get; set; }
    public static int result { get; set; }


    public static int gcd(int a, int b)
    {
      if (a == 0)
        return b;
      return gcd(b % a, a);
    }
    public static void products(int a , int b)
    {
       
      sum += (a * b);
      //Console.WriteLine(sum);
    }

    public static void lcm(int a, int b)
    {
       
      sum2 += (a/ gcd(a, b)) * b;
      //Console.WriteLine(sum2);
    }

    public static void print()
    {
      result = sum - sum2;
      Console.WriteLine(result);

    }
    static void Main(string[] args)
        {

      int[,] a = new int[3, 2] { { 15, 18 },
                                          { 4 , 5 },
                                          { 12, 60},
                                          
                                                    };
       for(int i=0;i<3;i++)
      {
        products(a[i,0], a[i,1]);
        lcm(a[i, 0], a[i, 1]);
      }

      print();

    }

  
  
  
 
  }
}
