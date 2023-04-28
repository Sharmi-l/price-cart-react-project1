import Card from "./Card";



function App() {
 
  const data = [

    {
    
        type    :  "FREE",
        rate    :  "$0",
        month   :  "/month",
        users   :  "tick",
        user    :  "Single User", 
        storages:  "tick",
        storage :  "5GB Storage",  
        packages:  "tick",
        package :  "Unlimited Public Projects",  
        accesss :  "tick",
        access  :  "Community Access",
        projects:  "cross",
        project :  "Unlimited Private Projects",   
        supports:  "cross",
        support :  "Dedicated Phone Support",  
        domains :  "cross",
        domain  :  "Free Subdomain",  
        reports :  "cross",
        report  :  "Monthly Status Reports"  
    
    },
    {
        type    :  "PLUS",
        rate    :  "$9",
        month   :  "/month",
        users   :  "tick",
        user    :  "5 Users",
        storages:  "tick",
        storage :  "5GB Storage",
        packages:  "tick",
        package :  "Unlimited Public Projects",
        accesss :  "tick",
        access  :  "Community Access",
        projects:  "tick",
        project :  "Unlimited Private Projects",
        supports:  "tick",
        support :  "Dedicated Phone Support",
        domains :  "tick",
        domain  :  "Free Subdomain",
        reports :  "cross",
        report  :  "Monthly Status Reports"  
    },
    
    {
    
        type    :  "PRO",
        rate    :  "$49", 
        month   :  "/month",
        users   :  "tick",
        user    :  "Unlimited Users",
        storages:  "tick",
        storage :  "150GB Storage", 
        packages:  "tick",
        package :  "Unlimited Public Projects", 
        accesss :  "tick", 
        access  :  "Community Access",
        projects:  "tick",
        project :  "Unlimited Private Projects",  
        supports:  "tick", 
        support :  "Dedicated Phone Support",   
        domains :  "tick",
        domain  :  "Free Subdomains",  
        reports :  "tick",
        report  :  "Monthly Status Reports"  
    }
    ]

  return (
    <div className="App">

     <section className="pricing py-5">
    <div className="container">
      <div className="row">

        {data.map((value, idx)=>{

        return   <Card 
              datas = {value}
              />          
        })}

    </div>
    </div>
  </section>

    </div>
  );
}

export default App;


