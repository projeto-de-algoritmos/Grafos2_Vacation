import React from 'react';

class Solution {
    static question(start_location, destination) {
        let capitais = [
            "Aracajú",
            "Belém",
            "Belo Horizonte",
            "Boa Vista",
            "Brasília",
            "Campo Grande",
            "Cuiabá",
            "Curitiba",
            "Florianópolis",
            "Fortaleza",
            "Goiânia",
            "João Pessoa",
            "Maceió",
            "Manaus",
            "Natal",
            "Palmas",
            "Porto Alegre",
            "Porto Velho",
            "Recife",
            "Rio Branco",
            "Rio de Janeiro",
            "Salvador",
            "São Luis",
            "São Paulo",
            "Teresina",
            "Vitória"
        ]
    
        let weights = {
        "Aracajú:Aracajú": 0,
        "Belém:Aracajú": 2079,
        "Belém:Belém": 0,
        "Belo Horizonte:Aracajú": 1578,
        "Belo Horizonte:Belém": 2824,
        "Belo Horizonte:Belo Horizonte": 0,
        "Boa Vista:Aracajú": 6000,
        "Boa Vista:Belém": 6083,
        "Boa Vista:Belo Horizonte": 4736,
        "Boa Vista:Boa Vista": 0,
        "Brasília:Aracajú": 1652,
        "Brasília:Belém": 2120,
        "Brasília:Belo Horizonte": 716,
        "Brasília:Boa Vista": 4275,
        "Brasília:Brasília": 0,
        "Campo Grande:Aracajú": 2765,
        "Campo Grande:Belém": 2942,
        "Campo Grande:Belo Horizonte": 1453,
        "Campo Grande:Boa Vista": 3836,
        "Campo Grande:Brasília": 1134,
        "Campo Grande:Campo Grande": 0,
        "Cuiabá:Aracajú": 2775,
        "Cuiabá:Belém": 2941,
        "Cuiabá:Belo Horizonte": 1594,
        "Cuiabá:Boa Vista": 3142,
        "Cuiabá:Brasília": 1133,
        "Cuiabá:Campo Grande": 694,
        "Cuiabá:Cuiabá": 0,
        "Curitiba:Aracajú": 2595,
        "Curitiba:Belém": 3193,
        "Curitiba:Belo Horizonte": 1004,
        "Curitiba:Boa Vista": 4821,
        "Curitiba:Brasília": 1366,
        "Curitiba:Campo Grande": 991,
        "Curitiba:Cuiabá": 1679,
        "Curitiba:Curitiba": 0,
        "Florianópolis:Aracajú": 2892,
        "Florianópolis:Belém": 3500,
        "Florianópolis:Belo Horizonte": 1301,
        "Florianópolis:Boa Vista": 5128,
        "Florianópolis:Brasília": 1673,
        "Florianópolis:Campo Grande": 1298,
        "Florianópolis:Cuiabá": 1986,
        "Florianópolis:Curitiba": 300,
        "Florianópolis:Florianópolis": 0,
        "Fortaleza:Aracajú": 1183,
        "Fortaleza:Belém": 1610,
        "Fortaleza:Belo Horizonte": 2528,
        "Fortaleza:Boa Vista": 6548,
        "Fortaleza:Brasília": 2200,
        "Fortaleza:Campo Grande": 3407,
        "Fortaleza:Cuiabá": 3406,
        "Fortaleza:Curitiba": 3541,
        "Fortaleza:Florianópolis": 3838,
        "Fortaleza:Fortaleza": 0,
        "Goiânia:Aracajú": 1848,
        "Goiânia:Belém": 2017,
        "Goiânia:Belo Horizonte": 906,
        "Goiânia:Boa Vista": 4076,
        "Goiânia:Brasília": 209,
        "Goiânia:Campo Grande": 935,
        "Goiânia:Cuiabá": 934,
        "Goiânia:Curitiba": 1186,
        "Goiânia:Florianópolis": 1493,
        "Goiânia:Fortaleza": 2482,
        "Goiânia:Goiânia": 0,
        "João Pessoa:Aracajú": 611,
        "João Pessoa:Belém": 2161,
        "João Pessoa:Belo Horizonte": 2171,
        "João Pessoa:Boa Vista": 6593,
        "João Pessoa:Brasília": 2245,
        "João Pessoa:Campo Grande": 3357,
        "João Pessoa:Cuiabá": 3366,
        "João Pessoa:Curitiba": 3188,
        "João Pessoa:Florianópolis": 3485,
        "João Pessoa:Fortaleza": 688,
        "João Pessoa:Goiânia": 2442,
        "João Pessoa:João Pessoa": 0,
        "Macapá:Macapá": 0,
        "Maceió:Aracajú": 294,
        "Maceió:Belém": 2173,
        "Maceió:Belo Horizonte": 1854,
        "Maceió:Boa Vista": 6279,
        "Maceió:Brasília": 1930,
        "Maceió:Campo Grande": 3040,
        "Maceió:Cuiabá": 3049,
        "Maceió:Curitiba": 2871,
        "Maceió:Florianópolis": 3168,
        "Maceió:Fortaleza": 1075,
        "Maceió:Goiânia": 2125,
        "Maceió:João Pessoa": 395,
        "Manaus:Aracajú": 5215,
        "Manaus:Belém": 5298,
        "Manaus:Belo Horizonte": 3951,
        "Manaus:Boa Vista": 785,
        "Manaus:Brasília": 3490,
        "Manaus:Campo Grande": 3051,
        "Manaus:Cuiabá": 2357,
        "Manaus:Curitiba": 4036,
        "Manaus:Florianópolis": 4443,
        "Manaus:Fortaleza": 5763,
        "Manaus:Goiânia": 3291,
        "Manaus:João Pessoa": 5808,
        "Natal:Aracajú": 788,
        "Natal:Belém": 2108,
        "Natal:Belo Horizonte": 2348,
        "Natal:Boa Vista": 6770,
        "Natal:Brasília": 2422,
        "Natal:Campo Grande": 3534,
        "Natal:Cuiabá": 3543,
        "Natal:Curitiba": 3365,
        "Natal:Florianópolis": 3662,
        "Natal:Fortaleza": 537,
        "Natal:Goiânia": 2618,
        "Natal:João Pessoa": 185,
        "Palmas:Aracajú": 1662,
        "Palmas:Belém": 1283,
        "Palmas:Belo Horizonte": 1690,
        "Palmas:Boa Vista": 4926,
        "Palmas:Brasília": 973,
        "Palmas:Campo Grande": 1785,
        "Palmas:Cuiabá": 1784,
        "Palmas:Curitiba": 2036,
        "Palmas:Florianópolis": 2336,
        "Palmas:Fortaleza": 2035,
        "Palmas:Goiânia": 874,
        "Palmas:João Pessoa": 2253,
        "Porto Alegre:Aracajú": 3296,
        "Porto Alegre:Belém": 3852,
        "Porto Alegre:Belo Horizonte": 1712,
        "Porto Alegre:Boa Vista": 5348,
        "Porto Alegre:Brasília": 2027,
        "Porto Alegre:Campo Grande": 1518,
        "Porto Alegre:Cuiabá": 2206,
        "Porto Alegre:Curitiba": 711,
        "Porto Alegre:Florianópolis": 476,
        "Porto Alegre:Fortaleza": 4242,
        "Porto Alegre:Goiânia": 1847,
        "Porto Alegre:João Pessoa": 3889,
        "Porto Velho:Aracajú": 4230,
        "Porto Velho:Belém": 4397,
        "Porto Velho:Belo Horizonte": 3050,
        "Porto Velho:Boa Vista": 1686,
        "Porto Velho:Brasília": 2589,
        "Porto Velho:Campo Grande": 2150,
        "Porto Velho:Cuiabá": 1456,
        "Porto Velho:Curitiba": 3135,
        "Porto Velho:Florianópolis": 3442,
        "Porto Velho:Fortaleza": 4862,
        "Porto Velho:Goiânia": 2390,
        "Porto Velho:João Pessoa": 4822,
        "Recife:Aracajú": 501,
        "Recife:Belém": 2074,
        "Recife:Belo Horizonte": 2061,
        "Recife:Boa Vista": 6483,
        "Recife:Brasília": 2135,
        "Recife:Campo Grande": 3247,
        "Recife:Cuiabá": 3255,
        "Recife:Curitiba": 3078,
        "Recife:Florianópolis": 3375,
        "Recife:Fortaleza": 800,
        "Recife:Goiânia": 2332,
        "Recife:João Pessoa": 120,
        "Rio Branco:Aracajú": 4763,
        "Rio Branco:Belém": 4931,
        "Rio Branco:Belo Horizonte": 3584,
        "Rio Branco:Boa Vista": 2230,
        "Rio Branco:Brasília": 3123,
        "Rio Branco:Campo Grande": 2684,
        "Rio Branco:Cuiabá": 1990,
        "Rio Branco:Curitiba": 3669,
        "Rio Branco:Florianópolis": 3976,
        "Rio Branco:Fortaleza": 5396,
        "Rio Branco:Goiânia": 2924,
        "Rio Branco:João Pessoa": 5356,
        "Rio de Janeiro:Aracajú": 1855,
        "Rio de Janeiro:Belém": 3250,
        "Rio de Janeiro:Belo Horizonte": 434,
        "Rio de Janeiro:Boa Vista": 5159,
        "Rio de Janeiro:Brasília": 1148,
        "Rio de Janeiro:Campo Grande": 1444,
        "Rio de Janeiro:Cuiabá": 2017,
        "Rio de Janeiro:Curitiba": 852,
        "Rio de Janeiro:Florianópolis": 1144,
        "Rio de Janeiro:Fortaleza": 2805,
        "Rio de Janeiro:Goiânia": 1338,
        "Rio de Janeiro:João Pessoa": 2448,
        "Salvador:Aracajú": 356,
        "Salvador:Belém": 2100,
        "Salvador:Belo Horizonte": 1372,
        "Salvador:Boa Vista": 5794,
        "Salvador:Brasília": 1446,
        "Salvador:Campo Grande": 2568,
        "Salvador:Cuiabá": 2566,
        "Salvador:Curitiba": 2385,
        "Salvador:Florianópolis": 2682,
        "Salvador:Fortaleza": 1389,
        "Salvador:Goiânia": 1643,
        "Salvador:João Pessoa": 949,
        "São Luis:Aracajú": 1578,
        "São Luis:Belém": 806,
        "São Luis:Belo Horizonte": 2738,
        "São Luis:Boa Vista": 6120,
        "São Luis:Brasília": 2157,
        "São Luis:Campo Grande": 2979,
        "São Luis:Cuiabá": 2978,
        "São Luis:Curitiba": 3230,
        "São Luis:Florianópolis": 3537,
        "São Luis:Fortaleza": 1070,
        "São Luis:Goiânia": 2054,
        "São Luis:João Pessoa": 1660,
        "São Paulo:Aracajú": 2187,
        "São Paulo:Belém": 2933,
        "São Paulo:Belo Horizonte": 586,
        "São Paulo:Boa Vista": 4756,
        "São Paulo:Brasília": 1015,
        "São Paulo:Campo Grande": 1014,
        "São Paulo:Cuiabá": 1614,
        "São Paulo:Curitiba": 408,
        "São Paulo:Florianópolis": 705,
        "São Paulo:Fortaleza": 3127,
        "São Paulo:Goiânia": 926,
        "São Paulo:João Pessoa": 2770,
        "Teresina:Aracajú": 1142,
        "Teresina:Belém": 947,
        "Teresina:Belo Horizonte": 2302,
        "Teresina:Boa Vista": 6052,
        "Teresina:Brasília": 1789,
        "Teresina:Campo Grande": 2911,
        "Teresina:Cuiabá": 2910,
        "Teresina:Curitiba": 3143,
        "Teresina:Florianópolis": 3450,
        "Teresina:Fortaleza": 634,
        "Teresina:Goiânia": 1986,
        "Teresina:João Pessoa": 1224,
        "Vitória:Aracajú": 1408,
        "Vitória:Belém": 3108,
        "Vitória:Belo Horizonte": 524,
        "Vitória:Boa Vista": 5261,
        "Vitória:Brasília": 1239,
        "Vitória:Campo Grande": 1892,
        "Vitória:Cuiabá": 2119,
        "Vitória:Curitiba": 1300,
        "Vitória:Florianópolis": 1597,
        "Vitória:Fortaleza": 2397,
        "Vitória:Goiânia": 1428,
        "Vitória:João Pessoa": 2001,
        "Maceió:Maceió": 0,
        "Manaus:Maceió": 5491,
        "Manaus:Manaus": 0,
        "Natal:Maceió": 572,
        "Natal:Manaus": 5985,
        "Natal:Natal": 0,
        "Palmas:Maceió": 1851,
        "Palmas:Manaus": 4141,
        "Palmas:Natal": 2345,
        "Palmas:Palmas": 0,
        "Porto Alegre:Maceió": 3572,
        "Porto Alegre:Manaus": 4563,
        "Porto Alegre:Natal": 4066,
        "Porto Alegre:Palmas": 2747,
        "Porto Alegre:Porto Alegre": 0,
        "Porto Velho:Maceió": 4505,
        "Porto Velho:Manaus": 901,
        "Porto Velho:Natal": 4998,
        "Porto Velho:Porto Alegre": 3662,
        "Porto Velho:Porto Velho": 0,
        "Recife:Maceió": 285,
        "Recife:Manaus": 5698,
        "Recife:Natal": 297,
        "Recife:Palmas": 2058,
        "Recife:Porto Alegre": 3779,
        "Recife:Porto Velho": 4712,
        "Recife:Recife": 0,
        "Rio Branco:Maceió": 5039,
        "Rio Branco:Manaus": 1445,
        "Rio Branco:Natal": 5533,
        "Rio Branco:Palmas": 3764,
        "Rio Branco:Porto Alegre": 4196,
        "Rio Branco:Porto Velho": 544,
        "Rio Branco:Recife": 5243,
        "Rio Branco:Rio Branco": 0,
        "Rio de Janeiro:Maceió": 2131,
        "Rio de Janeiro:Manaus": 4374,
        "Rio de Janeiro:Natal": 2625,
        "Rio de Janeiro:Palmas": 2124,
        "Rio de Janeiro:Porto Alegre": 1553,
        "Rio de Janeiro:Porto Velho": 3473,
        "Rio de Janeiro:Recife": 2338,
        "Rio de Janeiro:Rio Branco": 4007,
        "Rio de Janeiro:Rio de Janeiro": 0,
        "Salvador:Maceió": 632,
        "Salvador:Manaus": 5009,
        "Salvador:Natal": 1126,
        "Salvador:Palmas": 1454,
        "Salvador:Porto Alegre": 3090,
        "Salvador:Porto Velho": 4023,
        "Salvador:Recife": 839,
        "Salvador:Rio Branco": 4457,
        "Salvador:Rio de Janeiro": 1649,
        "Salvador:Salvador": 0,
        "São Luis:Maceió": 1672,
        "São Luis:Manaus": 5335,
        "São Luis:Natal": 1607,
        "São Luis:Palmas": 1386,
        "São Luis:Porto Alegre": 3891,
        "São Luis:Porto Velho": 4434,
        "São Luis:Recife": 1573,
        "São Luis:Rio Branco": 4968,
        "São Luis:Rio de Janeiro": 3015,
        "São Luis:Salvador": 1599,
        "São Luis:São Luis": 0,
        "São Paulo:Maceió": 2453,
        "São Paulo:Manaus": 3971,
        "São Paulo:Natal": 2947,
        "São Paulo:Palmas": 1776,
        "São Paulo:Porto Alegre": 1109,
        "São Paulo:Porto Velho": 3070,
        "São Paulo:Recife": 2660,
        "São Paulo:Rio Branco": 3604,
        "São Paulo:Rio de Janeiro": 429,
        "São Paulo:Salvador": 1962,
        "São Paulo:São Luis": 2970,
        "São Paulo:São Paulo": 0,
        "Teresina:Maceió": 1236,
        "Teresina:Manaus": 5267,
        "Teresina:Natal": 1171,
        "Teresina:Palmas": 1401,
        "Teresina:Porto Alegre": 3804,
        "Teresina:Porto Velho": 4366,
        "Teresina:Recife": 1137,
        "Teresina:Rio Branco": 4900,
        "Teresina:Rio de Janeiro": 2579,
        "Teresina:Salvador": 1163,
        "Teresina:São Luis": 446,
        "Teresina:São Paulo": 2792,
        "Teresina:Teresina": 0,
        "Vitória:Maceió": 1684,
        "Vitória:Manaus": 4476,
        "Vitória:Natal": 2178,
        "Vitória:Palmas": 2214,
        "Vitória:Porto Alegre": 2001,
        "Vitória:Porto Velho": 3575,
        "Vitória:Recife": 1831,
        "Vitória:Rio Branco": 4109,
        "Vitória:Rio de Janeiro": 521,
        "Vitória:Salvador": 1202,
        "Vitória:São Luis": 2607,
        "Vitória:São Paulo": 882,
        "Vitória:Teresina": 2171,
        "Vitória:Vitória": 0
    }
        
        let visited = new Map();
        let maxHeap = new MaxHeap();
        maxHeap.insert([start_location, 0])
        let distance = new Map();
    
        while(maxHeap.heapSize) {
            let [node, weight] = maxHeap.remove()
    
            weight = -weight
            if (visited.has(node)) { continue }
            
            visited.set(node, true)
            distance.set(node, weight)
    
            capitais.forEach((node1) => {
                
                let weight1 = 0
                if (weights[node+":"+node1]) {
                    weight1 =  weights[node+":"+node1]
                }
                else if (weights[node1+":"+node]) {
                    weight1 =  weights[node1+":"+node]
                }
                maxHeap.insert([node1, -(weight+weight1)])
            })
        }
        
        let answer = Infinity
        for (const key of distance.keys()) {
            if (key === destination) {
                answer = Math.min(answer, distance.get(key))
            }
        }
        
        return answer
    };
}

class MaxHeap {
    constructor() {
        this.heapList = [0];
        this.heapSize = 0;
    }
    
    insert = (value) => {
        this.heapList.push(value);
        this.heapSize += 1;
        
        this.moveUp(this.heapSize);
    }
    
    moveUp = (childPosition) => {
        while (Math.floor(childPosition /2) > 0) {
            let parent = Math.floor(childPosition/2);
            
            if (this.heapList[parent][1] < this.heapList[childPosition][1]) {
                let temp = this.heapList[childPosition];
                this.heapList[childPosition] = this.heapList[parent];
                this.heapList[parent] = temp;
            }
            
            childPosition = parent;
        }
    }
    
    remove = () => {
        const maxValue = this.heapList[1];
        
        this.heapList[1] = this.heapList[this.heapSize];
        this.heapSize -= 1;
        
        this.heapList.pop();
        
        this.moveDown(1);
        return maxValue;
    }
    
    moveDown = (parentPosition) => {
        while (parentPosition * 2 <= this.heapSize) {
            const maxChildPosition = this.findMaxChild(parentPosition);
            
            if (this.heapList[parentPosition][1] < this.heapList[maxChildPosition][1]) {
                const temp = this.heapList[maxChildPosition]
                this.heapList[maxChildPosition] = this.heapList[parentPosition]
                this.heapList[parentPosition] = temp;
            }
            
            parentPosition = maxChildPosition;
        }
    }
    
    findMaxChild = (parentPosition) => {
        const rightChild = (parentPosition * 2) + 1;
        const leftChild = parentPosition * 2;
        
        if (rightChild > this.heapSize) {
            return leftChild;
        } else {
            if (this.heapList[rightChild][1] > this.heapList[leftChild][1]) {
                return rightChild;
            } else {
                return leftChild;
            }
        }
    }
    
        build = (arrayList) => {
        const len = arrayList.length;
        this.heapSize = len;
        this.heapList = [0, ...arrayList];
        
        let position = Math.floor(len / 2);
        
        while (position > 0) {
            this.moveDown(position);
            position -= 1;
        }
    }
}

export default Solution;