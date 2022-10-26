export class InputTableComponent implements OnInit {
    relation: any = ['Father', 'Mother', 'Brother', 'Sister', 'Son', 'Daughter']
    dependent: any = ['Dependent', 'Self-Sufficient']
    mobile: any
    family : any = []
    mobile_no1:any =
      {
        "mobile" : this.active.snapshot.paramMap.get('mobile_no1')
      }
    
    
    familyData = [
      {
        'sno':'1',
        'name': '',
        'relation': '',
        'age': '',
        'occupation': '',
        'contactnumber': '',
        'dependent': '',
        'mobile': this.active.snapshot.paramMap.get('mobile_no1')
      },
      {
        'sno':'2',
        'name': '',
        'relation': '',
        'age': '',
        'occupation': '',
        'contactnumber': '',
        'dependent': ''
      },
      {
        'sno':'3',
        'name': '',
        'relation': '',
        'age': '',
        'occupation': '',
        'contactnumber': '',
        'dependent': ''
      },
      {
        'sno':'4',
        'name': '',
        'relation': '',
        'age': '',
        'occupation': '',
        'contactnumber': '',
        'dependent': ''
      },
    ];