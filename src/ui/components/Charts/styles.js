import styled from 'styled-components';
import { SB_WHITE } from '../../../utils/constants/StyleConstants';

export const Wrapper = styled.div`
  margin: 20px 0;
  max-width: 100%;
  .Charts {
    margin: 0 auto;
    background-color: #f9f9f9;
    display: flex;
    align-items: flex-end;
    padding: 50px;
    // height: 25em;
    
    &.horizontal {
      display: block;
    }
    
    &.horizontal &--serie {
      display: block;
      margin: 0 0 30px 0;
      border: 0;
      
      label {
        position: relative;
        top: auto;
        right: auto;
        left: 0;
        bottom: auto;
        padding: 0 0 10px 0;
      }
    }
    
    &--serie {
      height: 100%;
      margin: 0;
      display: inline-block;
      flex: 1;
      display: flex;
      align-items: flex-end;
      transform-origin: 0 100%;
      animation: slideUp .6s;
      position: relative;
      border-bottom: 1px solid #c2c2c2;
      
      &.stacked {
        display: block;
      }
      
      label {			
        position: absolute;
        left: 0;
        right: 0;
        bottom: -20px;
        font-family: Helvetica, sans-serif;
        font-size: 10px;
        text-align: center;
        color: #808080;
      }
    }
    
    &.horizontal &--item {
      display: block;
      border-radius: 0 2px 2px 0;
      margin: 0 0 5px 0;
      height: 1em;
      
      b {
        position: absolute;
        right: -20px;
        top: .3em;
      }
    }
    
    &--item {
      background-color: #43A19E;
      display: inline-block;
      margin: 0 5px 0 0;
      flex: 1;
      transition: height 1s ease-out, width 1s ease-out;
      position: relative;
      text-align: center;
      border-radius: 2px 2px 0 0;
      
      &.layered {
        position: absolute;
        left: 5%;
        right: 5%;
        bottom: 0;
        margin: 0;
        
        b {
          position: absolute;
          right: 0;
        }
      }
      
      &.stacked {
        position: relative;
        display: block;
        border-radius: 0;
      }
      
      b {
        position: relative;
        font-family: Helvetica, sans-serif;
        font-size: 10px;
        top: -20px;
        color: #43A19E;
      }
    }
  }
  
  @keyframes slideUp {
    from { transform: scaleY(0); }
    to { transform: scaleY(1); }
  }
`;
export const LabelBaseStats = styled.b`
  font-size: 14px !important;
`;
export const LabelStats = styled.label`
  font-size: 14px !important;
  bottom: 0px !important;
  color: ${SB_WHITE} !important;
  @media (max-width: 768px) {
    display: none;
  }
`;
