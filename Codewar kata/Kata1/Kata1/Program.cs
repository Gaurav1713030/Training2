using System;
using System.Collections.Generic;



namespace Kata1
{
  class Program
  {

    static Dictionary<int, int> x = new Dictionary<int, int>();

    static void countFreq(int[] a, int n, int no)
    {
      for (int i = 0; i < n; i++)
      {
        if (x.ContainsKey(a[i]))
          x[a[i]]++;
        else x.Add(a[i], 1);
      }

      foreach (KeyValuePair<int, int> e in x)
      {
        if (e.Value >= no)
        {
          for (int i = 0; i < no; i++)
            Console.Write(e.Key + " ");
        }
      }
    }

    //static bool q(int y, int no)
    //{
    //  if (x.ContainsKey(y))
    //    return true;
    //  else
    //    return false;

    //}
    static void print(int y)
    {
      if (x.ContainsKey(y))
        Console.WriteLine(y);
      else
        return;
    }

    static void Main(string[] args)
    {
      int[] a = { 20,37,20,21 };
      int n = a.Length;
      int no;
      no = 1;

      countFreq(a, n,no);
      //for (int i = 0; i < n; i++)
      //{
      //  print(a[i]);
      //  //Console.WriteLine(a[i]);

      //}

    }
  }
}

