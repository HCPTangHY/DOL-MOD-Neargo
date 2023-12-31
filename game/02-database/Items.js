class Item {
    id;name;desc;choice;battleSkill;formula;
    constructor(args) {
        let i=0;
        for (let key of Object.keys(this)) {
            this[key] = args[i];
            if (key=='choice' || key=='battleSkill') {
                this[key] = this[key].split(" ");
            }
            i++;
        }
    }
    static read_item(data) {
        data = String(data).split("\n")
        for (let i=0;i<data.length;i++) {
            data[i] = data[i].split(",")
        }
        let items = {}
        for (let i=0;i<data.length;i++) {
            items[data[i][0]] = new Item(data[i])
        }
        return items
    }
}

var data = "FishBread,鱼面包,鳀鱼酱做馅，面包的香甜和鳀鱼的鲜味是绝妙的搭配呢,吃(3HP)|eat_food:3;0击打|make_damage:1,,oven|鳀鱼酱 面团\nPawBread,脚掌面包,有巧克力、草莓酱、奶油、橘子酱四种口味，形状就好像猫掌的肉垫,吃(3HP)|eat_food:3;0击打|make_damage:1,,oven|巧克力酱 面团 脚掌模具\nCatBread,猫形面包,长40cm的巨型面包，做纪念品很是合适,吃(10HP)|eat_food:3;0,击打|make_damage:3,,oven|面团 黄油 巨大猫形模具\nPawPocketSandwich,脚印烧口袋三明治,现烤出的热乎乎三明治里，夹着满满的奶酪和厚厚的火腿，味道特别好！上面印着克罗华森的脚印，还附赠克罗华森形状的叉子！,吃(6HP)|eat_food:3;5,投掷|throw_damage:2,,西伯利亚烘焙坊工作台|奶酪 火腿 三明治\nCatBiscuit,猫形饼干,芝麻口味的饼干，捏成了猫的形状,吃(3HP)|eat_food:3;0投掷|throw_damage:1,,oven|芝麻 黄油 面团\nFishBiscuit,鱼形饼干,原味饼干，捏成了鱼的形状,吃(3HP)|eat_food:3;0投掷|throw_damage:1,,oven|黄油 面团\nFitnessCake,低糖减脂蛋糕,少奶油、无砂糖的减肥蛋糕，味道很不错。千万别说是为梅普设计的哦！,吃(3HP)|eat_food:3;0投掷|throw_damage:1,,蛋糕转盘|蛋糕胚 低脂奶油 \nOneApplePie,一角苹果派,招牌的苹果馅饼，几乎刚出炉就会买完,吃(3HP)|eat_food:3;0投掷|throw_damage:1,,案板|苹果派\nApplePie,苹果派,招牌的苹果馅饼，几乎刚出炉就会买完,吃(3HP)|eat_food:3;0投掷|throw_damage:1,,oven|苹果 黄油 面团 糖 鸡蛋\nPawCoffee,猫爪咖啡,普通的拿铁，有着猫爪般的拉花,吃(10AP)|eat_food:0;10,泼洒|throw_damage:3,,猫爪咖啡机|咖啡粉 牛奶 糖\nCappuccino,卡布奇诺,咖啡与奶，意大利做法,吃(10AP)|eat_food:0;10,泼洒|throw_damage:3,,咖啡机|咖啡粉 牛奶 奶泡\nCaramelMacchiato,焦糖玛奇朵,热牛奶，咖啡与香草的碰撞，焦糖浆在上面晶莹闪烁,吃(10AP)|eat_food:0;10,泼洒|throw_damage:3,,咖啡机|焦糖浆 咖啡粉 牛奶 奶油\nMilkshake,奶昔,巧克力或者草莓味的奶昔，有时候还有饼干碎,吃(5HP)|eat_food:5;0,泼洒|throw_damage:3,,料理机|牛奶 草莓 冰块\nMilktea,奶茶,嗯~第一口就喝到了珠珠欸~,吃(5HP5AP)|eat_food:5;5,泼洒|throw_damage:3,,煮锅|牛奶 茶 木薯珍珠\nCrepesStrawberry,草莓可丽饼,酸酸甜甜的可丽饼，深受女性顾客喜爱,吃(5HP)|eat_food:5;0投掷|throw_damage:2,,可丽饼烤盘|面糊 奶油 草莓\nCrepesBanana,香蕉可丽饼,全是香蕉！分量十足！,吃(5HP)|eat_food:5;0投掷|throw_damage:2,,可丽饼烤盘|面糊 奶油 香蕉\nCrepesFitness,健康可丽饼,以蔬菜为主，十分健康！,吃(5HP)|eat_food:5;0投掷|throw_damage:2,,可丽饼烤盘|面糊 奶油 生菜 黄瓜\nCrepesCream,奶油可丽饼,材料简单，却十分可口,吃(5HP)|eat_food:5;0投掷|throw_damage:2,,可丽饼烤盘|面糊 奶油\nCatNews,猫猫日报,每日发行的猫猫日报，记录城市的日常事务,;击打|make_damage:2,,猫猫日报印刷机|纸\nRedRose,红玫瑰,一朵红玫瑰，我爱你,;击打|make_damage:5,,\nSunflower,向日葵,一束向日葵，信念、光辉、热爱,;击打|make_damage:5,,\nTulip,郁金香,一朵郁金香，记得不要让猫咪咬到哦,;击打|make_damage:2,,\nPinkLily,粉百合,一株粉百合，带着一抹羞意的清纯可爱,;击打|make_damage:2,,"
// console.log(Item.read_item(data))
Object.defineProperty(window,"Items",{value:Item.read_item(data)})