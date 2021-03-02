

public class Createpass{
    public static void main(Strig... args){
        if(args.length < 2){
            System.err.println("コマンドラインで引数を指定してください");
            System.exit(-1);
        }
        Createpass　c = new Createpass(args[0], Integer.valueof(args[1]));
        try{
          c.write(System.out);
        }catch(Exception e){
            e.printStackTrace();
        }
    }
  //********************************************
    private final Chara c;
    private final int length;
    private String result;

    test(String str ,int len){
        c = Chara.get(str);
        length = len;
        result = this.result();
    }

    private String result(){
        //System.out.println(c.table);
        //System.out.println(c.len);
        StringBuffer sb = new StringBuffer("result -> ");
        java.util.Arrays.stream(new int[this.length]).parallel().
        map(i -> c.table[(int)(Math.random() * c.len)]).
        forEach(i ->{synchronized(sb){
            sb.append((char)i);
        }});
        return sb.toString();
    }
    
    public void write(OutputStream os) throws IOException{
        os.write(result.getBytes());
        os.write('\n');
        os.flush();
    }

    enum Chara{
        ALL("QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890_"), 
        Number("1234567890"), 
        Character("QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm");
        char[] table;
        int len;
        Chara(String str){
            this.table = str.toCharArray();
            len = str.length();
        }
        static Chara get(String str){
            if("ALL".equals(str))return ALL;
            if("Number".equals(str))return Number;
            if("Character".equals(str))return Character;
            throw new IllegalArgumentException("不明な引数です。");
        }
    }
}
