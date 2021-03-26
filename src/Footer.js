import React, { useEffect } from 'react';
import "./Footer.css";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayCircleFilledTwoToneIcon from '@material-ui/icons/PlayCircleFilledTwoTone';
import SkipPreviousTwoToneIcon from '@material-ui/icons/SkipPreviousTwoTone';
import SkipNextTwoToneIcon from '@material-ui/icons/SkipNextTwoTone';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { Grid, Slider } from "@material-ui/core";
import { UseDataLayerValue } from './DataLayer';


function Footer({spotify}) {

    const[{token, item, playing}, dispatch] = UseDataLayerValue();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
            dispatch({
                type: "SET_PLAYING",
                playing: r.is_playing,
            });

            dispatch({
                type:"SET_ITEM",
                item: r.item,
            });
        })
    }, [spotify]);

    const handlePlayPause = () => {
        if(playing) {
            spotify.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
        }
        else {
            spotify.play();
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            })
        }
        }

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r)=> {
            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
            dispatch ({
                type: "SET_PLAYING",
                playing: true,
            });
        })
    }

    const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r)=> {
            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
            dispatch ({
                type: "SET_PLAYING",
                playing: true,
            });
        })
    }


    return (
        <div className="footer">
            <div className="footer_left">
                <img src={item?.album.images[0].url} alt={item?.name} />

                {item ? (
                <div className="footer_songInfo">
                    <h4>{item.name}</h4>
                    <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                </div>) : (
                <div className="footer_songInfo">
                    <h4>No song playing...</h4>
                    <p>...</p>
                </div>
                )}


            </div>

            <div className="footer_center">
            <ShuffleIcon/>
            <SkipPreviousTwoToneIcon onClick={skipPrevious} />
            <PlayCircleFilledTwoToneIcon fontSize='large' onClick={handlePlayPause}/>
            <SkipNextTwoToneIcon onClick={skipNext}/>
            <RepeatIcon/>
            </div>

            <div className="footer_right">
            
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeOffIcon/>
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>
            
            </div>

        </div>
    )
}

export default Footer
