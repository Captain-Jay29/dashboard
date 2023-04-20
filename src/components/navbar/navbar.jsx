import React from 'react';
// import './navbar.css';
import Pages from './pages.jsx';

// Images
import logo from './logo.png'
import dash from './dash.png'
import message from './message.png'
import calculator from './calculator.png'
import logout from './logout.png'
import flash from './flash.png'
import help from './danger.png'
import setting from './setting-3.png'

// Material UI
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



const Navbar = () => {

	return (


		


			<Grid container direction='column' spacing={3}
				sx={{
						
						background: 'black',
						
					}}>
			
		      
		        <Grid item xs={3}>
	

		         	<List>
		         		
		         		<ListItem disablePadding>
			            <ListItemButton>

			              <ListItemIcon sx={{width: 45, height: 32, minWidth: 40}}>
			                <img src={logo} className='logo'></img>
			              </ListItemIcon>

			              <ListItemText  >
			              <Typography sx={{fontSize:'24px', fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'white'}}>
			              	RealPly
			              	</Typography>
			              	</ListItemText>
			            
			            </ListItemButton>
			          </ListItem>

		         	</List>
		         
		        </Grid>
		      
		        <Grid item xs={4}>


		      	<List>
		         	
		         	{/*1*/}
	         		<ListItem disablePadding>
		            <ListItemButton>

		              <ListItemIcon sx={{width: 20, height: 20, minWidth: 30}}>
		                <img src={dash} />
		              </ListItemIcon>

		              <ListItemText>
		              	<Typography sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'white'}}>
			              	Dashboard
			            </Typography>
		              </ListItemText>
		            
		            </ListItemButton>
		          </ListItem>

		          {/*2*/}
		          <ListItem disablePadding>
		            <ListItemButton>

		              <ListItemIcon sx={{width: 20, height: 20, minWidth: 30}}>
		                <img src={message} />
		              </ListItemIcon>

		              <ListItemText>
		              	<Typography sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'white'}}>
			              	Message
			            </Typography>
		              </ListItemText>

		            </ListItemButton>
		          </ListItem>

		          {/*3*/}
		          <ListItem disablePadding>
		            <ListItemButton>

		              <ListItemIcon sx={{width: 20, height: 20, minWidth: 30}}>
		                <img src={calculator} />
		              </ListItemIcon>

		              <ListItemText>
		              	<Typography sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'white'}}>
			              	Calender
			            </Typography>
		              </ListItemText>
		            
		            </ListItemButton>
		          </ListItem>


		          {/*4*/}
		          <ListItem disablePadding>
		            <ListItemButton>

		              <ListItemIcon sx={{width: 20, height: 20, minWidth: 30}}>
		                <img src={flash} />
		              </ListItemIcon>

		              <ListItemText>
		              	<Typography sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'white'}}>
			              	Campaigns
			            </Typography>
		              </ListItemText>
		            
		            </ListItemButton>
		          </ListItem>


		          {/*5*/}
		          <ListItem disablePadding sx={{marginTop: 24}}>
		            <ListItemButton>

		              <ListItemIcon sx={{width: 20, height: 20, minWidth: 30}}>
		                <img src={setting} />
		              </ListItemIcon>

		              <ListItemText>
		              	<Typography sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'white'}}>
			              	Settings
			            </Typography>
		              </ListItemText>
		            
		            </ListItemButton>
		          </ListItem>


		          {/*6*/}
		          <ListItem disablePadding>
		            <ListItemButton>

		              <ListItemIcon sx={{width: 20, height: 20, minWidth: 30}}>
		                <img src={help} />
		              </ListItemIcon>

		              <ListItemText>
		              	<Typography sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'white'}}>
			              	Help?
			            </Typography>
		              </ListItemText>
		            
		            </ListItemButton>
		          </ListItem>

	         	</List>
		        



				{/*<Pages img={dash} name={'Dashboard'} />
				<Pages img={message} name={'Messages'} />
				<Pages img={calculator} name={'Calender'} />
				<Pages img={flash} name={'Campaigns'} />
				<Pages img={dash} name={'settings'} />
				<Pages img={dash} name={'help'} />*/}
					
		        </Grid>



				<Grid item xs={5} sx={{paddingLeft: 5, paddingRight: 2, paddingBottom: 5.8}}>


			      	<Card sx={{ backgroundColor:'black', minWidth: 150, padding: 2, border:2, borderRadius:'20px', borderColor:'#D4D4FC'}}>
		      
				      <CardContent>
				        
				        <Typography variant="h5" component="div" sx={{fontSize: '22px', fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'white'}}>
				          Your free trial is about to end in 10 days.
				        </Typography>
				        
				        
				        <Typography variant="body2" sx={{fontSize: '12px', marginTop:2, fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'#D4D4FC'}}>
				          You will not be billed during your free trial. 
				        </Typography>

				        <Typography variant="body2" sx={{marginTop:2, fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', fontSize: '12px', color:'#D4D4FC'}}>
				          To keep your projects running after the trial end, upgrade to a paid option.				
				        </Typography>
				      
				      </CardContent>
				      
				      <CardActions>
				        <Button size="large" sx={{borderRadius: 2, width:200, fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'white', border:1, borderColor:'#D4D4FC'}}>Upgrade</Button>
				      </CardActions>
				    

				    </Card>

				    <List sx={{marginTop:5}}>
			         	
			         	{/*1*/}
		         		<ListItem disablePadding>
			            <ListItemButton>

			              <ListItemIcon sx={{width: 20, height: 20, minWidth: 30}}>
			                <img src={logout} />
			              </ListItemIcon>

			              <ListItemText>
			              	<Typography sx={{fontFamily: 'Sulphur Point', fontWeight:700, fontStyle:'normal', color:'white'}}>
				              	Logout
				            </Typography>
			              </ListItemText>
			            
			            </ListItemButton>
			          </ListItem>

			    	</List>


			    </Grid>



		</Grid>



)}

export default Navbar;