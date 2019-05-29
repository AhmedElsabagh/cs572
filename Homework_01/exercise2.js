
$(document).ready(function(){
    function getFetch(){
        let dataFetch = fetch('https://randomuser.me/api/');
        return dataFetch;
    }

    $("#promiseFetch").click(function(){
    getFetch().then(data => data.json())
      .then(data => {
          console.log(
              data.results.map(
                  c => ({'Name': c.name,'location' :c.location })
              )
          );
      });

    });

    
    $("#asyncFetch").click(function(){
        mapData();
    });
      
    async function asyncFunc(){
        const asyncFetch = await getFetch();
        return asyncFetch.json();
    }

    async function mapData(){
        let jdata = await asyncFunc();
        console.log(
            jdata.results.map(
                c => ({'Name': c.name,'location' :c.location })
            )
        );
    }
 

      $("#reactiveFetch").click(function(){
        const {from} = rxjs;
        const {flatMap,map} = rxjs.operators;

        let reactiveData = getFetch();

        from(reactiveData)
        .pipe(
            flatMap(ele => ele.json()),
            map(s => s.results.map(c => ({'Name': c.name,'location' :c.location })))
        )
        .subscribe(
            obj => console.log(obj)
        )
      });
  
});